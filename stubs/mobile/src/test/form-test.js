let formTestJs = {};

formTestJs.path = "src/test";

formTestJs.filename = "form-test.js";

formTestJs.content = `

import FormPage from "../common/FormPage";
import TabPage from "../common/TabPage";
const expect =require('chai').expect;
describe('Test Form Elements', () => {
    it('should enter the text element inside the form and get the text', () => {
        TabPage.forms.click()
        const text = 'Helooo'
        FormPage.setText(text)
        const value = FormPage.inputText.getText()
        expect(value).to.equal(text)
        if (driver.isKeyboardShown()) {
            driver.hideKeyboard();
        }
    })
    it('should be able to toggle the switch and get check whether switch is on or off', () => {
        const switchOff='Click to turn the switch OFF'
        const switchOn='Click to turn the switch OFF'
        FormPage.switchElement.click()
        const firstValue = FormPage.checkSwitchValue.getText()
        expect(firstValue).to.equal(switchOff)
        const secondValue = FormPage.checkSwitchValue.getText()
        expect(secondValue).to.equal(switchOn)
    })
    it('should be able to select the value from the select element', () => {
        const firstElement = 'webdriver.io is awesome'
        const secondElement = 'Appium is awesome'
        const thirdElement = 'This app is awesome'
        FormPage.dropDown.click()
        FormPage.dropDownText(secondElement)
        FormPage.dropDown.click()
        FormPage.dropDownText(firstElement)
        FormPage.dropDown.click()
        FormPage.dropDownText(thirdElement)
    })
    it('should be able to check for alerts and test for active button', () => {
        const firstAlertText='Ask me later'
        const secondAlertText='Cancel'
        const thirdAlertText='OK'
        driver.touchPerform([
            { action: 'press', options: { x: 100, y: 250 } },
            { action: 'wait',options: { ms: 3000 },},
            { action: 'moveTo', options: { x: 300, y: 100 } },
            { action: 'release' }
        ]);
        driver.waitUntil(() => {
            return FormPage.activeButton
        }, 4000,
            'Page not loaded', 100)
        FormPage.activeButton.click()
        FormPage.alertButton(firstAlertText)
        FormPage.activeButton.click()
        FormPage.alertButton(secondAlertText)
        FormPage.activeButton.click()
        FormPage.alertButton(thirdAlertText)
    })
    it('should be able to check the inactive button to be active or inactive', () => {
        FormPage.inactiveButton.click()  
        const disabled = FormPage.inactiveButton.isEnabled()
       expect(disabled).to.equal(true)
    })
})`;
module.exports = formTestJs;
