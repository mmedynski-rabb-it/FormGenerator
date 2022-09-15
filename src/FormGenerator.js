export class FormGenerator {
    constructor(json) {
    this.json = json;
    }

    show() {

        let element = [];

        for(let i in this.json)
        {
            element[i] = document.createElement("input");

            element[i].type = (this.json[i].type) ? this.json[i].type : '';
            element[i].id = (this.json[i].id) ? this.json[i].id : '';
            element[i].name = (this.json[i].name) ? this.json[i].name : '';
            element[i].required = (this.json[i].required) ? this.json[i].required : '';
            element[i].autofocus = (this.json[i].autofocus) ? this.json[i].autofocus : '';


            if (this.json[i].type == 'password' || this.json[i].type == 'email' || this.json[i].type == 'text') {
                let inputElement = document.getElementById(element[i].id);
                let parentElement = document.getElementById('form-register');
                let labelElement = document.createElement("label");
                labelElement.htmlFor = this.json[i].id;
                labelElement.innerHTML = this.json[i].label;
                parentElement.insertBefore(labelElement, inputElement)
            } else if (this.json[i].type == 'reset' || this.json[i].type == 'submit') {
                element[i].value = this.json[i].label;
            }

            document.getElementById('form-register').appendChild(element[i]);

        }


    }
};