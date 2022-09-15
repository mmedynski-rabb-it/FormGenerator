export class FormValidator {
    constructor(json) {
    this.json = json;
    }

    show() {

        let element = [];

        for(let i in this.json)
        {
            let object = this.json[i];
            element[i] = document.createElement("input");
            let keys = Object.keys(object);
            for(let k in keys) {
                element[i].type = (this.json[i].type) ? this.json[i].type : '';
                element[i].id = (this.json[i].id) ? this.json[i].id : '';
                element[i].name = (this.json[i].name) ? this.json[i].name : '';
                element[i].label = (this.json[i].label) ? this.json[i].label : '';
                element[i].required = (this.json[i].required) ? this.json[i].required : '';
                element[i].autofocus = (this.json[i].autofocus) ? this.json[i].autofocus : '';
            }

            document.getElementById('form-login').appendChild(element[i])

        }


    }
};