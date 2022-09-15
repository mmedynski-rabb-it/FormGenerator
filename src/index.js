import _ from 'lodash';
import { FormGenerator } from './FormGenerator';
import { FormValidator } from './FormValidator';

const jsonRegister =
    [
        {
            "id": "fr-email",
            "type": "email",
            "name": "email",
            "label": "Adres e-mail",
            "required": true,
            "autofocus": true
        },
        {
            "id": "fr-password",
            "type": "password",
            "name": "password",
            "label": "Hasło",
            "required": true
        },
        {
            "id": "fr-password_confirmation",
            "type": "password",
            "name": "password_confirmation",
            "label": "Powtórz hasło",
            "required": true
        },
        {
            "type": "reset",
            "label": "Wyczyść"
        },
        {
            "type": "submit",
            "label": "Zarejestruj"
        }
    ];
const jsonLogin =
    [
        {
            "id": "fl-email",
            "type": "email",
            "name": "email",
            "label": "Adres e-mail",
            "autofocus": true
        },
        {
            "id": "fl-password",
            "type": "password",
            "name": "password",
            "label": "Hasło"
        },
        {
            "type": "submit",
            "label": "Zaloguj"
        }
    ]






const registerForm = new FormGenerator(jsonRegister);
registerForm.show();

const validatorForm = new FormValidator(jsonLogin);
validatorForm.show();