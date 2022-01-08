describe('test user log in', () => {
  // 🧭🧭 time: 20 minutes

  //  1) test if user types correct data

  // 💰 open login page

  // links:
  // https://docs.cypress.io/api/commands/visit

  // 💰 add base url to cypress.json ("baseUrl": "http://localhost:3000")

  // links:
  // https://docs.cypress.io/guides/references/configuration#cypress-json

  // 💰 get username input and type a valid username

  // links:
  // https://docs.cypress.io/api/commands/get
  // https://docs.cypress.io/api/commands/find
  // https://docs.cypress.io/api/commands/type

  // 💰 get password input and type a valid password

  // 💰 click on submit

  // links:
  // https://docs.cypress.io/api/commands/click

  // 💰 check if url is articles

  // links:
  // https://docs.cypress.io/api/commands/url
  // https://docs.cypress.io/api/commands/should
  // https://docs.cypress.io/guides/references/assertions#Text-Content

  /***************************/

  // 🧭🧭 time: 10 minutes

  // 2) test if user types wrong data

  // 💰 open login page

  // 💰 get username input and type a invalid username

  // 💰 get password input type a valid password

  /***************************/

  // 🧭🧭 time: 15 minutes

  //  3)  let's do some refactor

  // 💰 open login page before each test

  // links
  // https://docs.cypress.io/guides/references/best-practices#2-Run-shared-code-before-each-test

  // 💰 add some commands

  // links:
  // https://docs.cypress.io/api/cypress-api/custom-commands#Syntax

  beforeEach(() => {
    cy.visit('/login');
  });

  // 1)
  it('test if user types correct data', () => {
    cy.getByDataCy('username').type('zeinab');

    cy.getByDataCy('password').type('password');

    cy.getByDataCy('login_submit').click();

    cy.url().should('match', /\/articles/);
  });

  // 2

  it('test if user types wrong data', () => {
    cy.getByDataCy('username').type('zei');

    cy.getByDataCy('username')
      .find('.invalid-feedback')
      .should('have.css', 'display', 'block');

    cy.getByDataCy('password').type('password');

    cy.getByDataCy('login_submit').click();

    cy.url().should('not.match', /\/articles/);
  });
});
