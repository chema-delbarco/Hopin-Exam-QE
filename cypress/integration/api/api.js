/// <reference types="cypress" />

describe('Customer API', () => {
    context('POST /', () => {
        it('creates a valid Customer', () => {
            cy.api({url: '/', method: 'POST'}).then((res) => {
                expect(res.status).to.equal(200);
            })
        })
    })
})