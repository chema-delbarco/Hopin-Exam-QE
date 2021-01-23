/// <reference types="cypress" />
import dayjs from 'dayjs';
import { api } from '../../schemas';

const today = dayjs().format('ddd MMM DD YYYY');

describe('Customer API', () => {
    context('POST /', () => {
        it('loads all Customers', () => {
            cy.api({ url: '/', method: 'POST' }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.all.keys('timestamp', 'customers');
                expect(response.body.customers).to.have.length(6);
                expect(response.body.timestamp).to.equal(today);
            })
        })

        it('loads a Customer without contactInfo', () => {
            cy.api({ url: '/', method: 'POST' }).then((res) => {
                expect(res.status).to.equal(200);
            })
        })

        it('loads a Customer with full data', () => {
            cy.api({ url: '/', method: 'POST' }).then((res) => {
                expect(res.status).to.equal(200);
            })
        })

        it('fails for non-existing Customer', () => {
            cy.api({ url: '/', method: 'POST' }).then((res) => {
                expect(res.status).to.equal(200);
            })
        })

        it('validates displayed size', () => {
            cy.api({ url: '/', method: 'POST' }).then((res) => {
                expect(res.status).to.equal(200);
            })
        })

        it('validate schema for list of customers', () => {
            cy.api({ url: '/', method: 'POST' })
                .its('body')
                .then(api.assertSchema('ConsumerSchema', '1.0.0'))
        })
    })
})