class MyProfilPage {

        verifyMyProfilPage () {
            return cy.contains("h2","My Account")
        
        }



}

module.exports = new MyProfilPage()