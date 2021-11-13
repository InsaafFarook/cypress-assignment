/// <reference types="cypress" />

import { signInSuccessData, signInInvalidData } from '../../fixtures/sign_up.json';
import * as SignUp from '../../lib/functions/SignUpFuntions.js';
import * as EmailConfirmation from '../../lib/functions/EmailConfirmationFunctions';

describe('Verify Sign Up Page', () => {

  it('Verify Empty Sign Up name error', () => {
    SignUp.signUp('{del}', signInSuccessData.email, signInSuccessData.password, true, false);
    SignUp.getNameError().should('eq', "Please enter your name.");
  });

  it('Verify Empty Sign Up email error', () => {
    SignUp.signUp(signInSuccessData.name, '{del}', signInSuccessData.password, true, false);
    SignUp.getEmailError().should('eq', "Please enter your email address.");
  });

  it('Verify incorrect Sign Up email error', () => {
    SignUp.signUp(signInSuccessData.name, signInInvalidData.email, signInSuccessData.password, true, false);
    SignUp.getEmailError().should('eq', "The email you entered is incorrect.");
  });

  it('Verify Empty Sign Up password error', () => {
    SignUp.signUp(signInSuccessData.name, signInSuccessData.email, '{del}', true, false);
    SignUp.getPasswordError().should('contain', "Please enter your password.");
  });

  it('Verify Sign Up password error with less than 8 Characters', () => {
    SignUp.signUp(signInSuccessData.name, signInSuccessData.email, signInInvalidData.password, true, false);
    SignUp.getPasswordError().should('contain', "Please enter your password.");
  });

  it('Verify Agreement terms error', () => {
    SignUp.signUp(signInSuccessData.name, signInSuccessData.email, signInSuccessData.password, false, false);
    SignUp.getAgreementTermsError().should('eq', "Please agree with the Terms to sign up.");
  });

  it('Verify user can sign up successfully', () => {
    SignUp.signUp(signInSuccessData.name, signInSuccessData.email, signInSuccessData.password, true, true);
    EmailConfirmation.getSignUpTitle().should('eq', "Check your email");
    EmailConfirmation.getSubTitle().should('contain', signInSuccessData.email );
  });

})