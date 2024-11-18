import {myInfo, editInfo} from "../Locators/infoLocators";

class editProfile{
    editInfo(){
        cy.get(myInfo.my_Info).click()
        cy.get(myInfo.firstname).clear().type(myInfo.firstname)
        cy.get(myInfo.middlename).clear().type(myInfo.middlename)
        cy.get(myInfo.lastname).clear().type(myInfo.lastname)
        cy.get(myInfo.saveButton).click()
    }

    saveChanges(){
        cy.get(myInfo.saveButton).click()
        cy.get('.oxd-toast-container').should('exist')
        cy.wait(5000)
    }

    assertChanges(){
        cy.get(myInfo.firstname).should('have.value', editInfo.firstname)
        cy.get(myInfo.middlename).should('have.value', editInfo.middlename)
        cy.get(myInfo.lastname).should('have.value', editInfo.lastname)
    }

}

export default editProfile