/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {};

// Решение
Object.defineProperty(person, "salary", {
    get: function() {
        const now = new Date()
        const daysinMonth = 33 - new Date(now.getFullYear(), now.getMonth(), 33).getDate();

        if ( (daysinMonth - now.getMonth()) > 20) {
       
            return 'good salary'}
        else {
       
            return 'bad salary';
        }
    }
});

person.salary; // bad salary

exports.person = person;
