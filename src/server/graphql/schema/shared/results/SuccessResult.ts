import { objectType } from 'nexus';

export const SuccessResult = objectType({
  name: 'SuccessResult',
  definition(t) {
    t.boolean('success');
    t.nonNull.BigInt('id');
  }
});

export default SuccessResult;
