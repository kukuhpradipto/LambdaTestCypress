/// <reference types ="cypress" />
const pageLayouts = require('../pages/ProductLayout')


describe("Test Scenario – Pagination Testing", () => {

    const url = "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=20"

    beforeEach(() => {
        cy.visit(url)
    })

    it("Pagination Limit Verification 15 Product", () => {
        pageLayouts.tablePageLayout().should("have.length.at.most", 15)
        pageLayouts.verificationproduct().should('contain.text', "15")
        pageLayouts.verificationproduct().invoke('text').then((text) =>{
            const total = text.match(/of\s+(\d+)/)[1]
            expect(Number(total))
        })

    })

    it("Pagination Limit Verification 25 Product", () => {
        pageLayouts.showlimitProduct().select('25')
        pageLayouts.tablePageLayout().should("have.length.at.most", 25)
        pageLayouts.verificationproduct().invoke('text').then((text) =>{
            const total = text.match(/of\s+(\d+)/)[1]
            expect(Number(total))
        })
    })

    it("Pagination Limit Verification 50 Product", () => {
        pageLayouts.showlimitProduct().select('50')
        pageLayouts.tablePageLayout().should("have.length.at.most", 50)
        pageLayouts.verificationproduct().invoke('text').then((text) =>{
            const total = text.match(/of\s+(\d+)/)[1]
            expect(Number(total))
        })
    })

    it("Pagination Limit Verification 75 Product", () => {
        pageLayouts.showlimitProduct().select('75')
        pageLayouts.tablePageLayout().should("have.length.at.most", 75)
        pageLayouts.verificationproduct().invoke('text').then((text) =>{
            const total = text.match(/of\s+(\d+)/)[1]
            expect(Number(total))
        })
    })

    it("Pagination Limit Verification 100 Product", () => {
        pageLayouts.showlimitProduct().select('100')
        pageLayouts.tablePageLayout().should("have.length.at.most", 100)
        pageLayouts.verificationproduct().invoke('text').then((text) =>{
            const total = text.match(/of\s+(\d+)/)[1]
            expect(Number(total))
        })
    })

    it.only("Verification button next on the pagination can to be click", () => {
            cy.get('.pagination li').should('be.visible').and('have.length.at.least',2).contains('>').click()

            cy.url().should('include','page=2')

            cy.get('.pagination li').should('be.visible').and('have.length.at.least',2).contains('1').click()

            cy.url().should('not.include','page=2')

        })

})