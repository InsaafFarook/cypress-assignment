/// <reference types="cypress" />

const txtName = '#name';
const txtWorkEmail = '#email';
const txtPassword = '#password';
const chkTerms = '#signup-terms';
const chkSubscribe = '#signup-subscribe';
const btnSignUp = '.signup__submit';
const lblNameError = '#nameError';
const lblEmailError = '#emailError';
const lblPasswordError = 'div[data-autotest-id="please-enter-your-password-1"]'
const lblTermsError = '#termsError'

export const navigateToSignUp = () => cy.visit('https://miro.com/signup/');

export const isSignUpPageDisplayed = () => cy.get('.signup').should('be.visible');

export const enterName = (name) => 
  cy.get(txtName).clear().type(name);

export const enterWorkEmail = (email) => 
  cy.get(txtWorkEmail).clear().type(email);

export const enterPassword = (password) => 
  cy.get(txtPassword).clear().type(password);

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
  cy.get(btnSignUp).click()
  
export const getNameError = () =>
  cy.get(lblNameError).invoke("text");

export const getEmailError = () =>
  cy.get(lblEmailError).invoke("text");

export const getPasswordError = () =>
  cy.get(lblPasswordError).invoke("text");
  
export const getAgreementTermsError = () => 
  cy.get(lblTermsError).invoke("text");