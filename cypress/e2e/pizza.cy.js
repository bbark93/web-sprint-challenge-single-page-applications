describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // Helpers to centralize the CSS selectors and clean up the tests a bit.
    const nameInput = () => cy.get('input[id=name-input]')
    const sizeInput = () => cy.get('select[id=size-dropdown]')
    const STInput = () => cy.get('input[id=special-text]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        sizeInput().should('exist')
        STInput().should('exist')
        
    })


})