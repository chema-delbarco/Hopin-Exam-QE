/// <reference types="cypress" />

describe('Customer API', () => {
    context('POST /', () => {
        it('loads all Customers', () => {
            cy.api({url: '/', method: 'POST'}).then((res) => {
                expect(res.status).to.equal(200);
            })
        })

        it('loads a Customer without contactInfo', () =>{

        })

        it('loads a Customer with full data', () => {

        })

        it.only('fails for non-existing Customer', () => {

        })

        it('validates displayed size')
    })
})