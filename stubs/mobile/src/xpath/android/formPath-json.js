let formPathJSON = {};

formPathJSON.path = "src/xpath/android";
formPathJSON.filename = 'formPath-json.json';
formPathJSON.content = `
{
        "FORM_INPUT":"//android.widget.TextView[@text='Forms']",
        "INPUT_FIELD":"//android.widget.EditText[@content-desc='text-input']",
        "TEXT_RESULT":"//android.widget.TextView[@content-desc='input-text-result']",
        "SWITCH":"//android.widget.Switch[@content-desc='switch']",
        "SWICH_TEXT":"//android.widget.TextView[@content-desc='switch-text']",
        "DROP_DOWN":"//android.view.ViewGroup[@content-desc='select-Dropdown']",
        "SELECT_DROPDOWN_VALUE":"//android.widget.ListView",
        "PAGE_DISMISS":"/android.widget.ScrollView[@content-desc='Forms-screen']/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]",
        "ACTIVE_BUTTON":"//android.view.ViewGroup[@content-desc='button-Active']/android.view.ViewGroup",
        "INACTIVE_BUTTON":"//android.view.ViewGroup[@content-desc='button-Inactive']/android.view.ViewGroup",
        "ALERT":"//android.widget.Button",
        "ALERT_CONFIRM":"//android.widget.TextView[@text='This button is active']"
        }`;
module.exports = formPathJSON;