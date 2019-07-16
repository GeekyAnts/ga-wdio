let nativeScreenJs = {};

nativeScreenJs.path = "src/common";

nativeScreenJs.filename = "NativeScreen.js";

nativeScreenJs.content = `

class NativeScreen {
    constructor(selector){
        this.selector=selector
    }
    waitUntilShown(){
        return $(this.selector).waitForDisplayed(10000,true)
    }
}
export default NativeScreen`;
module.exports = nativeScreenJs