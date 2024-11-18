import loginPage from "./Actions/login";
import editProfile from "./Actions/editProfile";
describe('', () => {

    it('', () => {
        const LoginPage = new loginPage();
        const EditProfile = new editProfile();

        LoginPage.open()
        LoginPage.login()
        LoginPage.loginAssert()
        EditProfile.editInfo()
        EditProfile.saveChanges()
        EditProfile.assertChanges()

    });
});