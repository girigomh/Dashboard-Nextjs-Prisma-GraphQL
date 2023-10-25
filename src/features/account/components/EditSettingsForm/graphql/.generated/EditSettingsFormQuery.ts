/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditSettingsFormQuery
// ====================================================

export interface EditSettingsFormQuery_me_jobType {
  __typename: "JobType";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Name of the job in English
   */
  name_en: string;
}

export interface EditSettingsFormQuery_me_bankAccountHidden {
  __typename: "BankAccount";
  bankName: string | null;
  bankAccount: string | null;
  bankRegistration: string | null;
}

export interface EditSettingsFormQuery_me_taxInfoHidden {
  __typename: "TaxInfo";
  personId: string | null;
  taxCard: string | null;
  countryId: any | null;
}

export interface EditSettingsFormQuery_me_address {
  __typename: "Address";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * Street address
   */
  address: string;
  /**
   * City of the address
   */
  city: string;
  /**
   * Postal code of the address
   */
  postalCode: string;
  /**
   * Id of country
   */
  countryId: any;
}

export interface EditSettingsFormQuery_me {
  __typename: "User";
  /**
   * Unique identifier for this type
   */
  id: any;
  /**
   * User first name
   */
  firstName: string | null;
  /**
   * User last name
   */
  lastName: string | null;
  /**
   * Users displayable name, using first name, last name or email to create this
   */
  displayName: string;
  /**
   * User email
   */
  email: string;
  /**
   * Default user unit
   */
  unit: string | null;
  /**
   * Default user currency
   */
  currency: string | null;
  /**
   * User language
   */
  language: string;
  /**
   * User phone number
   */
  phoneNumber: string | null;
  /**
   * Where the user says they heard about Factofly from
   */
  userSpecifiedReferral: string | null;
  /**
   * What work situation the freelancer is currently in
   */
  freelancerSituation: string | null;
  /**
   * Whether this user is setting some money aside for the vacation payment
   */
  vacationPayment: boolean;
  /**
   * Default job type
   */
  jobType: EditSettingsFormQuery_me_jobType | null;
  /**
   * User bank account
   */
  bankAccountHidden: EditSettingsFormQuery_me_bankAccountHidden | null;
  /**
   * User tax info
   */
  taxInfoHidden: EditSettingsFormQuery_me_taxInfoHidden | null;
  /**
   * User address
   */
  address: EditSettingsFormQuery_me_address | null;
}

export interface EditSettingsFormQuery {
  me: EditSettingsFormQuery_me;
}
