describe('test user log in', () => {
  // 🧭🧭 time: 20 minutes

  // 💰 open articles page, /articles

  // 💰 click on article one

  // 💰 check of you are in correct path

  // 💰 check if it has proper title

  // 💰 mock comments request

  // links
  // https://docs.cypress.io/guides/guides/network-requests#Stubbing

  // 💰 check if all comments are shown

  // 💰 go back in browser

  // links
  // https://docs.cypress.io/api/commands/go#Syntax

  // 💰 check if you are in articles page

  beforeEach(() => {
    cy.intercept('GET', '**/posts/*/comments*', {
      fixture: 'comments.json',
    }).as('getComments');

    cy.visit('/articles');
  });

  it('test if user types correct data', () => {
    cy.getByDataCy('article_article1').click();

    cy.url().should('match', /\/articles\/article1/);

    cy.get('h1').should('contain.text', 'article One');

    cy.wait('@getComments').then(() => {
      cy.get('.comment-item').should('have.length', 1);
    });

    cy.go(-1);

    cy.location('pathname').should('include', 'articles');
  });
});
