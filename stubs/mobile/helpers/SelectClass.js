let selectClassJs = {};

selectClassJs.path = "src/helpers";

selectClassJs.filename = "SelectClass.js";

selectClassJs.content =
	`class SelectClass {
        static _selectIos(xpath, text) {
            $(xpath).addValue(text)
        }
        static _selectAndroid(xpath, text) {
            $(\`${xpath}/*[@text='${text}']\`).click()
        }
        static selectDropdown(xpath, text) {
            const selector = driver.isIOS ? this._selectIos(xpath, text) : this._selectAndroid(xpath, text)
            return selector;
        }
    }

export default SelectClass;`