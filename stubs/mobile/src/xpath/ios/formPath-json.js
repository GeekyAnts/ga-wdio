let formPathJSON = {};

formPathJSON.path = "src/xpath/ios";
formPathJSON.filename = 'formPath-json.json';
formPathJSON.content = `
{
        "FORM_INPUT":"//XCUIElementTypeOther[@name='Login']",
        "INPUT_FIELD":"//XCUIElementTypeTextField[@name='text-input']",
        "TEXT_RESULT":"//XCUIElementTypeStaticText[@name='input-text-result']",
        "SWITCH":"//XCUIElementTypeSwitch[@name='switch']",
        "SWICH_TEXT":"//XCUIElementTypeStaticText[@name='switch-text']",
        "DROP_DOWN":"//XCUIElementTypeOther[@name='select-Dropdown']",
        "SELECT_DROPDOWN_VALUE":"//XCUIElementTypePickerWheel",
        "ACTIVE_BUTTON":"//XCUIElementTypeOther[@name='Active']",
        "INACTIVE_BUTTON":"//XCUIElementTypeStaticText[@name='Inactive']",
        "ALERT":"//XCUIElementTypeAlert",
        "ALERT_CONFIRM":"//XCUIElementTypeAlert[@text='This button is active']"
}`;
module.exports = formPathJSON