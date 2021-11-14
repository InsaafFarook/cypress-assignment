/// <reference types="cypress" />

const txtName = 'mr-form-signup-name-1';
const txtWorkEmail = 'mr-form-signup-email-1';
const txtPassword = 'mr-form-signup-password-1';
const chkTerms = '#signup-terms';
const chkSubscribe = '#signup-subscribe';
const btnSignUp = 'mr-form-signup-btn-start-1';
const lblNameError = '#nameError';
const lblEmailError = '#emailError';
const lblPasswordError = 'please-enter-your-password-1'
const lblTermsError = '#termsError'

const autoTest = 'mr-form-signup-name-1';

export const navigateToSignUp = () => cy.visit(Cypress.env('sign_up_url'));

export const isSignUpPageDisplayed = () => cy.get('.signup').should('be.visible');

export const enterName = (name) => 
  cy.dataAutotestId(txtName).clear().type(name);

export const enterWorkEmail = (email) => 
  cy.dataAutotestId(txtWorkEmail).clear().type(email);

export const enterPassword = (password) => 
  cy.dataAutotestId(txtPassword).clear().type(password);

export const selectAgreeTerms = (selectCheckbox) => {
  if(selectCheckbox === true){
    cy.get(chkTerms).check({ force: true }).should('be.checked');
  } else {
    cy.get(chkTerms).uncheck({ force: true }).should('not.be.checked');
  }
}
  
export const selectSubscribeNewsUpdates = (selectCheckbox) => {
  if(selectCheckbox === true){
    cy.get(chkSubscribe).check({ force: true }).should('be.checked');
  } else {
    cy.get(chkSubscribe).uncheck({ force: true }).should('not.be.checked');
  }
}

export const clickOnGetStartedNowButton = () =>
  cy.dataAutotestId(btnSignUp).click()
  
export const getNameError = () =>
  cy.get(lblNameError).invoke("text");

export const getEmailError = () =>
  cy.get(lblEmailError).invoke("text");

export const getPasswordError = () =>
  cy.dataAutotestId(lblPasswordError).invoke("text");
  
export const getAgreementTermsError = () => 
  cy.get(lblTermsError).invoke("text");