let formPageJS = {};

formPageJS.path = "src/repo";
formPageJS.filename = 'FormPage.js';
formPageJS.content = `import OpenPage from '../commons/OpenPage';

class FormPage extends OpenPage {
    open () {
        super.open('https://geekyants.com');
    }
    accept () {
        return $('[href="#"]');
    }
    hireLink () {
        return $('[href="/hire"]');
    }
    submitButton () {
        return $('//button[@type="submit"]');
    }
    name () {
        return $('[name="name"]');
    }
    company () {
        return $('[name="company"]');
    }
    email () {
        return $('[name="email"]');
    }
    skype () {
        return $('[name="skype"]');
    }
    referal () {
        return $('[name="referal"]');
    }
    requirement () {
        return $('[name="requirement"]');
    }
    checkOutput () {
        return $('h2=Thank You');
    }
}

export default new FormPage();
`;

module.exports = formPageJS;
