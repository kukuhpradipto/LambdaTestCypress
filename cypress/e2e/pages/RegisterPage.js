class RegisterPage{

    verifyRegisterPage (){
        return cy.contains(".page-title.h3","Register Account")
    }

    firstNameField(){
        return cy.get("#input-firstname")
    }

    lastNameField(){
        return cy.get("#input-lastname")
    }

    emailField(){
        return cy.get("#input-email")
    }

    telephoneField(){
        return cy.get("#input-telephone")
    }

    passwordField(){
        return cy.get("#input-password")
    }

    passwordConfirmField(){
        return cy.get("#input-confirm")
    }

    subscribeRadioButtonYES(){
        return cy.get("label[for='input-newsletter-yes']")
    }

    subscribeRadioButtonNO(){
        return cy.get("label[for='input-newsletter-no']")
    }


    checkBoxPricayPolicy(){
        return cy.get("label[for='input-agree']")
    }


     continueButton(){
        return cy.get("input[value='Continue']")
    }


    validationMessage(){
        return cy.get(".text-danger")
    }


    warningMessage(){
        return cy.get(".alert.alert-danger.alert-dismissible")
    }

    verifyRegisterSuccess(){
        return cy.get('.page-title')

    }

    validationFirstNameField(){
        return cy.contains(".text-danger","First Name must be between 1 and 32 characters!")
    }

    
    validationLaststNameField(){
        return cy.contains(".text-danger","Last Name must be between 1 and 32 characters!")
    }



    validationEmailField(){
        return cy.contains(".text-danger","E-Mail Address does not appear to be valid!")
    }

    validationTelephoneField(){
        return cy.contains(".text-danger","Telephone must be between 3 and 32 characters!")
    }

        validationPasswordField(){
        return cy.contains(".text-danger","Password must be between 4 and 20 characters!")
    }

        validationConfirmationPasswordDefferentField(){
        return cy.contains(".text-danger","Password confirmation does not match password!")
    }


        validationUnCeklisPrivacyPolicy(){
            return cy.contains(".alert.alert-danger.alert-dismissible", " Warning: You must agree to the Privacy Policy!")
        }



}

module.exports = new RegisterPage()