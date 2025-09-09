class Loginpage {
        verifyLoginPage () {
            return cy.get("h2").contains("Returning Customer")
        } 

        emailAddressLogin (){
            return cy.get("#input-email")
        }

        passwordLogin() {
            return cy.get("#input-password")
        } 
        
        forgottedPassword (){
            return cy.get("div[class='form-group'] a")
        } 
        buttonLogin (){
            return  cy.get("input[value='Login']")
        }

        alertError(){
            return cy.get(".alert.alert-danger.alert-dismissible")
        }
}

module.exports = new Loginpage()