/// <reference types="cypress" />
import { today } from '../../support/commands';

const usernameInput = 'input#name';
const userName = 'John Petrucci';

function submitUserName(userName) {
    if (userName) {
        cy.get(usernameInput).type(userName);
    }
    cy.get('input[type="button"]').click();
}

const expectedCustomers = [
    { name: 'Americas Inc.', employees: 10, size: 'Small', contactInfo: { name: 'John Smith', email: 'jsmith@americasinc.com' } },
    { name: 'Caribian Airlnis', employees: 1000, size: 'Big', contactInfo: { name: 'Jose Martinez', email: 'martines@cair.com' } },
    { name: 'MacroSoft', employees: 540, size: 'Medium', contactInfo: { name: 'Bill Paxton', email: 'bp@ms.com' } },
    { name: 'United Brands', employees: 20, size: 'Small' },
    { name: 'Bananas Corp', employees: 10000, size: 'Big', contactInfo: { name: 'Xavier Hernandez', email: 'xavier@bananas.com' } },
    { name: 'XPTO.com', employees: 102, size: 'Medium', contactInfo: { name: 'Daniel Zuck', email: 'zuckh@xpto.com' } }
]

describe('Customer UI', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(usernameInput).should('be.visible');
        cy.get('h1').should('have.text', 'Welcome to Customer App');
        cy.contains('Please provide your name:');
    })

    it('rejects missing user name', () => {
        submitUserName(false);
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Please provide your name');
        })
    })

    context('customers list', () => {

        beforeEach(() => {
            submitUserName(userName);
            cy.contains(`Hi ${userName}`);
            cy.contains(`Hi ${userName}. It is now ${today} and here is our customer list. Click on each of them to view their contact details.`);

        })

        it('loads list of customers', () => {
            cy.get('th').eq(0).should('have.text', 'Name');
            cy.get('th').eq(1).should('have.text', '# of Employees');
            cy.get('th').eq(2).should('have.text', 'Size');
        })

        expectedCustomers.forEach((customer, index) => {
            it(`displays ${customer.name} information`, () => {
                //ignore first table row
                cy.get('tr').eq(index + 1).within(() => {
                    cy.get('td').eq(0).should('have.text', customer.name);
                    cy.get('td').eq(1).should('have.text', customer.employees);
                    cy.get('td').eq(2).should('have.text', customer.size);
                });
                cy.get('tr').eq(index + 1).find('a').click();
                cy.contains('Customer Details');
                cy.contains(`Name: ${customer.name}`);
                cy.contains(`# of Employees: ${customer.employees}`);
                cy.contains(`Size: ${customer.size}`);
                if ('contactInfo' in customer) {
                    const contactInfo = customer.contactInfo;
                    cy.contains(`Contact: ${contactInfo.name} (${contactInfo.email})`);
                }
            })
        })
    })


})