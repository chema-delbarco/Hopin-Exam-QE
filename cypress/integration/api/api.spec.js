/// <reference types="cypress" />
import dayjs from 'dayjs';
import { api } from '../../schemas';

const today = dayjs().format('ddd MMM DD YYYY');
const username = 'Vasile Pop';

//TODO DECIDE IF name should be mandatory
describe('Customer API', () => {
    context('POST /', () => {
        it('loads all Customers without an user', () => {
            cy.api({ url: '/', method: 'POST' }).then((response) => {
                expect(response.status).to.equal(400, 'Missing user name');
            })
        })

        it('loads customers list for specific user', () => {
            cy.api({ url: '/', method: 'POST', body: { 'name': username } }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.all.keys('name', 'timestamp', 'customers');
                expect(response.body.name).to.equal(username);
                expect(response.body.customers).to.have.length(6);
                expect(response.body.timestamp).to.equal(today);

                const customers = response.body.customers;

                // validate a customer with missing contact info
                const customerWithoutInfo = customers.find(c => {
                    return c.id === 4
                });
                expect(customerWithoutInfo).to.not.have.key('contactInfo');

                // validate size value for each customer, soft-assertion
                let invalidData = [];
                customers.forEach(customer => {
                    const customerId = customer.id;
                    const employees = customer.employees;
                    const size = customer.size;
                    //TODO not the most extendable condition, fix it
                    if ((employees > 1000 && size !== 'Big') || (10 < employees <= 1000 && size !== 'Medium') || (employees <= 10 && size !== 'Small')) {
                        invalidData.push(customerId)
                    }
                    expect(invalidData).to.have.length(0, 'IDs of customers with wrong size value: ' + invalidData);
                });
            })
        })

        it('will not load customers for an empty user name', () => {
            cy.api({ url: '/', method: 'POST', body: { 'name': '' } }).then((res) => {
                expect(res.status).to.equal(400, 'Empty user name');
            })
        })

        it('will not load customers invalid user name', () => {
            cy.api({ url: '/', method: 'POST', body: { 'name': 123 } }).then((res) => {
                expect(res.status).to.equal(400, 'Invalid user name');
            })
        })

        it('validate schema for list of customers', () => {
            cy.api({ url: '/', method: 'POST', body: { 'name': username } })
                .its('body')
                .then(api.assertSchema('ConsumerSchema', '1.0.0'))
        })

        it('404 for non-existing endpoint', () => {
            cy.api({ url: '/nowaythisisworking', method: 'POST', body: { 'name': '' }, failOnStatusCode: false }).then((res) => {
                expect(res.status).to.equal(404);
            })
        })
    })
})