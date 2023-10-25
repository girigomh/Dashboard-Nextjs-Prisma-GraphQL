import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { ManagementClient } from 'auth0';
import apiConfig from '~/apiConfig';
import { IContextData } from '../IContextData';
import logger from '~/utils/logger';

/** This is a wrapper for the auth0 managment API */
export default class AuthManagementService extends DataSource {
  context!: IContextData;

  initialize(config: DataSourceConfig<IContextData>): void {
    this.context = config.context;
  }

  async updateEmailVerification(email: string) {
    try {
      const auth0 = new ManagementClient({
        domain: apiConfig.auth0.managementClientDomain,
        clientId: apiConfig.auth0.clientId,
        clientSecret: apiConfig.auth0.clientSecret,
        scope: 'read:users update:users'
      });

      const users = await auth0.getUsersByEmail(email);

      let verified = false;
      users.forEach((user) => {
        if (user.email_verified) {
          verified = true;
        }
      });

      if (verified) {
        await this.context.prisma.user.update({ data: { emailVerified: true }, where: { email } });
      }
    } catch (err: any) {
      logger.error(`AuthManagementService.ts: error updating email verification status ${err.message}`);
    }
  }

  async updateEmailAddress(userId: bigint, oldEmail: string, newEmail: string) {
    try {
      const auth0 = new ManagementClient({
        domain: apiConfig.auth0.managementClientDomain,
        clientId: apiConfig.auth0.clientId,
        clientSecret: apiConfig.auth0.clientSecret,
        scope: 'read:users update:users'
      });

      const users = await auth0.getUsersByEmail(oldEmail);

      if (users.length === 0) {
        throw new Error('Unable to find auth0 user to update');
      }

      const user = users[0];

      await auth0.updateUser({ id: user.user_id! }, { email: newEmail });

      await this.context.prisma.user.update({
        data: { emailVerified: false, email: newEmail, previousEmail: oldEmail },
        where: { id: userId }
      });

      await auth0.sendEmailVerification({ user_id: user.user_id! });
    } catch (err: any) {
      logger.error(`AuthManagementService.ts: error updating email address ${err.message}`);
      throw new Error('Error updating email address');
    }
  }
}
