/// <reference types = "cypress" /> 
class HomePage {

        url(){
            return cy.visit("https://ecommerce-playground.lambdatest.io/")
        }

        navbarMyAccount () {
            return cy.get('body > div:nth-child(1) > div:nth-child(5) > header:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)')
        } 

        navbarLogin(){
            return cy.get("span.title").contains(" Login ")
        }

        navbarRegister(){
            return cy.get("span.title").contains("Register")

        }

        verifyHomePage(){
            return cy.get(".carousel-item")
        } 
    
}


module.exports = new HomePage()