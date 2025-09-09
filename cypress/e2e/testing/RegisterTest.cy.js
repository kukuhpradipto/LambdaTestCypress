const HomePage = require("../pages/HomePage")
const RegisterPage = require("../pages/RegisterPage")
const generateRandomData = require("../../fixtures/autoGenerateRegisterData")


describe("Test Scenario – Register Form", () => {
    const registerData = generateRandomData();

    
    beforeEach(() => {
            HomePage.url()
            HomePage.verifyHomePage().should("be.visible")
            HomePage.navbarMyAccount().trigger("mouseover")
            HomePage.navbarRegister().click()
    })

    it("✅ R-PC01 - Successful Registration with Valid Data with radio button YES", () => {

        const registerData = generateRandomData();

        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonYES().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.verifyRegisterSuccess().should("be.visible").and("contain.text","Your Account Has Been Created!")
    })

    it("✅ R-PC02 - Successful Registration with Valid Data with radio button NO", () => {
         const registerData = generateRandomData();

        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.verifyRegisterSuccess().should("be.visible").and("contain.text","Your Account Has Been Created!")

    })

    it("❌ R-NC01- Register Form with Empty First Name", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().clear().should("have.value","")
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()
 
        RegisterPage.validationFirstNameField().should('be.visible')
        
    })

    it("❌ R-NC02- Register Form with Empty Last Name", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().clear().should("have.value","")
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.validationLaststNameField().should('be.visible')
        
    })

    it("❌ R-NC03- Register Form with Empty E-Mail", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().clear().should("not.have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.validationEmailField().should('be.visible')
    })

    it("❌ R-NC04- Register Form with Empty Phone", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().clear().should("have.value","")
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.validationTelephoneField().should('be.visible')
    })

it("❌ R-NC05- Register Form with Empty Password", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().clear().should("have.value","")
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.passwordField().should('be.visible')
        RegisterPage.passwordConfirmField().should('be.visible')

    })

it("❌ R-NC06- Register Form with Empty Confirmation Password", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().clear().should("have.value","")
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()
        RegisterPage.checkBoxPricayPolicy().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.passwordConfirmField().should('be.visible')

    })

it("❌ R-NC07- Register Form with Privacy Policy Not Checked", () => {
        RegisterPage.verifyRegisterPage().should("be.visible")
        RegisterPage.firstNameField().type(registerData.FirstName).should("have.value",registerData.FirstName)
        RegisterPage.lastNameField().type(registerData.LastName).should("have.value",registerData.LastName)
        RegisterPage.emailField().type(registerData.EMail).should("have.value",registerData.EMail)
        RegisterPage.telephoneField().type(registerData.Telephone).should("have.value",registerData.Telephone)
        RegisterPage.passwordField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.passwordConfirmField().type(registerData.Password).should("have.value",registerData.Password)
        RegisterPage.subscribeRadioButtonNO().should("be.visible").click()

        RegisterPage.continueButton().should("be.visible").click()

        RegisterPage.validationUnCeklisPrivacyPolicy().should('be.visible')

    })

})