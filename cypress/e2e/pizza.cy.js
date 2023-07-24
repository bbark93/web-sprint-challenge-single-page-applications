describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    // Helpers to centralize the CSS selectors and clean up the tests a bit.
    const nameInput = () => cy.get('input[id=name-input]')
    const sizeInput = () => cy.get('select[id=size-dropdown]')
    const STInput = () => cy.get('input[id=special-text]')
    const orderBtn = () => cy.get('button[id=order-button]')
    const pepperoniCB = () => cy.get('input[name=pepperoni]')
    const sausageCB = () => cy.get('input[name=sausage]')
    const olivesCB = () => cy.get('input[name=olives]')
    const pineappleCB = () => cy.get('input[name=pineapple]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        sizeInput().should('exist')
        STInput().should('exist')
        orderBtn().should('exist')
        pepperoniCB().should('exist')
        sausageCB().should('exist')
        olivesCB().should('exist')
        pineappleCB().should('exist')
    })

    describe('Filling out the inputs and submit to DOM', () => {
    
        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Brandon')
                .should('have.value', 'Brandon')
        })

        it('can check multiple toppings', () => {
            pepperoniCB().check().should('be.checked')
            sausageCB().check().should('be.checked')
            olivesCB().check().should('be.checked')
            pineappleCB().check().should('be.checked')
        })

        it('can submit inputs', () => {
            nameInput().type('Brandon')
            cy.get("select").select(2)
            cy.get('[type="radio"]').check()
            cy.get('button[id=order-button]').click()
            cy.contains(/Congrats! Pizza is on the way!/).should('exist')
        })
    })

})