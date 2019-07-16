let pageJs = {};

pageJs.path = "src/common";

pageJs.filename = "Page.js";

pageJs.content = `

class Page {
    open(path) {
        browser.url(path);
    }
}
export default Page;`;
module.exports = pageJs;
