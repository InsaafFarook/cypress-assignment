/// <reference types="cypress" />

import * as SignUpPage from '../pages/SignUpPage';

export const signUp = (name, email, password, agreeTerms, subscribe) => {
  SignUpPage.navigateToSignUp();
  SignUpPage.isSignUpPageDisplayed();
  SignUpPage.enterName(name);
  SignUpPage.enterWorkEmail(email);
  SignUpPage.enterPassword(password);
  SignUpPage.selectAgreeTerms(agreeTerms);
  SignUpPage.selectSubscribeNewsUpdates(subscribe);
  SignUpPage.clickOnGetStartedNowButton();
};

export const getNameError = () =>
  SignUpPage.getNameError();

export const getEmailError = () =>
  SignUpPage.getEmailError();
  
export const getPasswordError = () =>
  SignUpPage.getPasswordError();

export const getAgreementTermsError = () =>
  SignUpPage.getAgreementTermsError();