let formPageJs = {};

formPageJs.path = "src/common";

formPageJs.filename = "FormPage.js";

formPageJs.content =
	`
 import SelectClass from "../../helpers/SelectClass";
 import AppAlert from "../../helpers/AppAlert";
 import NativeScreen from "./NativeScreen";
 import TabPage from "./TabPage";

 const formXpath=require('../xpath/ios/formPath.json')
 class FormPage extends NativeScreen {
    constructor() {
        super(TabPage.forms)
    }
    get enterText() {
        return $(formXpath.INPUT_FIELD)
    }
    setText(text) {
        this.enterText.setValue(text)
    }
    get inputText() {
        return $(formXpath.TEXT_RESULT)
    }
    get switchElement() {
        return $(formXpath.SWITCH)
    }
    get checkSwitchValue() {
        return $(formXpath.SWICH_TEXT)
    }
    get dropDown() {
        return $(formXpath.DROP_DOWN)
    }
    dropDownText(value) {
        return SelectClass.selectDropdown(formXpath.SELECT_DROPDOWN_VALUE, value)
    }
    get clickOnPage() {
        return $(formXpath.PAGE_DISMISS)
    }
    get activeButton() {
        return $(formXpath.ACTIVE_BUTTON)
    }
    get inactiveButton() {
        return $(formXpath.INACTIVE_BUTTON)
    }
    alertButton(value) {
        return AppAlert.alertButton(formXpath.ALERT, value)
    }
    getAlertText(){
        return $(formXpath.ALERT_CONFIRM)
    }
}
export default new FormPage();`;

module.exports = formPageJs