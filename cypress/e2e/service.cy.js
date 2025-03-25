describe('service spec', () => {
  it('Add a route to a new service in default workspace', () => {
    cy.addBlankService('/default/services')
    cy.editService('TestName','https://httpbin.konghq.com')
    cy.get('[data-testid="service-create-form-submit"]')
    cy.get('[class*="add-route-btn"]').click()
    cy.addRoute('mocking','/mock')
  })
})