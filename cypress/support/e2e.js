// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Commands.add('addBlankService', (url) => {
    cy.on('uncaught:exception', (e) => {
        if (e.message.includes('uncaught:exception')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false
        }
        // on any other error message the test fails
      })
    cy.visit(url)
    cy.get('[data-testid="empty-state-action"]').click()
  })

Cypress.Commands.add('editService', (name, url) => {
    cy.on('uncaught:exception', (e) => {
        if (e.message.includes('uncaught:exception')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false
        }
        // on any other error message the test fails
      })
    
    cy.get('[data-testid="gateway-service-name-input"]').type(name)
    cy.get('[data-testid="gateway-service-url-input"]').type(url)
    cy.get('[data-testid="service-create-form-submit"]').click()
    cy.get('.k-toaster')
        .should('be.visible')
        .and('contain','successfully created')
        .and('contain',name)

  })

  Cypress.Commands.add('addRoute', (name, path) => {
    cy.on('uncaught:exception', (e) => {
        if (e.message.includes('uncaught:exception')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false
        }
        // on any other error message the test fails
      })
    
    cy.get('[data-testid="route-form-name"]').type(name)
    cy.get('[data-testid="route-form-paths-input-1"]').type(path)
    cy.get('[data-testid="route-create-form-submit"]').click()
    cy.get('.k-toaster')
        .should('be.visible')
        .and('contain','successfully created')
        .and('contain',name)
  })

  Cypress.Commands.add('deleteService', (name,path,url) => {
    cy.on('uncaught:exception', (e) => {
        if (e.message.includes('uncaught:exception')) {
          // we expected this error, so let's ignore it
          // and let the test continue
          return false
        }
        // on any other error message the test fails
      })
    cy.visit(url)
    cy.get('tbody').click()
    cy.get('[data-testid="service-routes"]').click()
    cy.get('[data-testid="row-actions-dropdown-trigger"]').click()
    cy.get('[data-testid="action-entity-delete"]').click()
    cy.get('[data-testid="confirmation-input"]').type(path)
    cy.get('[data-testid="modal-action-button"]').click()
    cy.visit(url)
    cy.get('[data-testid="row-actions-dropdown-trigger"]').click()
    cy.get('[data-testid="action-entity-delete"]').click()
    cy.get('[data-testid="confirmation-input"]').type(name)
    cy.get('[data-testid="modal-action-button"]').click()
    cy.get('.k-toaster')
        .should('be.visible')
        .and('contain','successfully deleted')
        .and('contain',name)

  })