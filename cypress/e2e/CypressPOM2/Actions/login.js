import {loginLocators, loginInformation} from "../Locators/LoginLocators";

class loginPage{
    open(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    }

    login() {
        cy.get(loginLocators.username).type(loginInformation.username)
        cy.get(loginLocators.password).type(loginInformation.password)
        cy.get(loginLocators.loginButton).click()
    }

    loginAssert() {
        cy.get(".oxd-topbar-header-userarea ul li").should('exist')
    }
}
export default loginPage
