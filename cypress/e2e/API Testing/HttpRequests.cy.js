import ("HTTP Requests", () =>{

    it("Get Call", () => {

        cy.request  ('GET', 'https://jsonplaceholder.typecode.com/posts/1')
        .its('status')
        should('equal', 200);
    })


})