const HomePage = require('../pages/HomePage')
const LoginPage = require('../pages/LoginPage')
const MyProfilPage = require("../pages/MyProfilPage")

describe('Test Scenario – Login', () => {

  beforeEach(() => {
    HomePage.url()
    HomePage.verifyHomePage().should("be.visible")
    HomePage.navbarMyAccount().trigger("mouseover")
    HomePage.navbarLogin().click()

    LoginPage.verifyLoginPage().should("be.visible")

  })

  it('✅ PC01 - Positive Case - Login with valid Email and password', () =>  {
    cy.fixture("/login/logindata").then((userdata) => {
     
      LoginPage.emailAddressLogin().type(userdata.validData.emailLog).should('have.value',userdata.validData.emailLog)
      LoginPage.passwordLogin().type(userdata.validData.passwordLog).should('have.value',userdata.validData.passwordLog)

      LoginPage.buttonLogin().click()

      MyProfilPage.verifyMyProfilPage().should("be.visible")

    })
  
  })

  it("❌ NC01 - Negative Case - Blank email and valid password", () => {

    cy.fixture("/login/logindata").then((userdata) => {
      LoginPage.emailAddressLogin().should('have.value',userdata.emptyEmail.emailLog)
      LoginPage.passwordLogin().type(userdata.emptyEmail.passwordLog).should('have.value',userdata.emptyEmail.passwordLog)

    })
      
    LoginPage.buttonLogin().click()
    LoginPage.alertError().should("be.visible").should("have.text"," Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.")
  })

  it("❌ NC02 - Negative Case - invalid email and blank password", () => {

    cy.fixture("/login/logindata").then((userdata) => {
      LoginPage.emailAddressLogin().type(userdata.emptyPassword.emailLog).should('have.value',userdata.emptyPassword.emailLog)
      LoginPage.passwordLogin().should('have.value',userdata.emptyPassword.passwordLog)

    })
      
    LoginPage.buttonLogin().click()
    LoginPage.alertError().should("be.visible").should("have.text"," Warning: No match for E-Mail Address and/or Password.")
  })

    it("❌ NC03 - Negative Case - invalid email and valid password", () => {

    cy.fixture("/login/logindata").then((userdata) => {
      LoginPage.emailAddressLogin().type(userdata.invalidEmail.emailLog).should('have.value',userdata.invalidEmail.emailLog)
      LoginPage.passwordLogin().type(userdata.invalidEmail.passwordLog).should('have.value',userdata.invalidEmail.passwordLog)

    })
      
    LoginPage.buttonLogin().click()
    LoginPage.alertError().should("be.visible").should("have.text"," Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.")
  })

    it("❌ NC04 - Negative Case - valid email and warong password", () => {

    cy.fixture("/login/logindata").then((userdata) => {
      LoginPage.emailAddressLogin().type(userdata.wrongPassword.emailLog).should('have.value',userdata.wrongPassword.emailLog)
      LoginPage.passwordLogin().type(userdata.wrongPassword.passwordLog).should('have.value',userdata.wrongPassword.passwordLog)

    })
      
    LoginPage.buttonLogin().click()
    LoginPage.alertError().should("be.visible").should("have.text"," Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.")
  })
  
})