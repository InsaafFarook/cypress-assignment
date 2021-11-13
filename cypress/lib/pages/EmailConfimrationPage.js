/// <reference types="cypress" />

const lblCheckYourEmail = '.signup__title-form';
const lblSubtitle = '.signup__subtitle-form'

export const getSignUpTitle = () => cy.get(lblCheckYourEmail).should('be.visible').invoke('text');

export const getSubTitle = () => cy.get(lblSubtitle).should('be.visible').invoke('text');