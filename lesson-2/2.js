/* Перепишите if..else с использованием нескольких операторов ? 
Для читаемости - оформляйте код в несколько строк.
var message;

if (login == 'Pitter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = '';
}
*/

let message;

(login == 'Pitter') ? message = 'Hi' :
    (login == 'Owner') ? message = 'Hello' :
        (login == '') ? message = 'unknown' : message = '';

/*
let message;
let login;

switch (login) {
    case 'Pitter': message = 'Hi'; break;
    case 'Owner': message = 'Hello'; break;
    case ''     : message = 'unknown'; break;
    default     : message = ''; 
}
*/