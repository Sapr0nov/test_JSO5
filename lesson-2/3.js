/* Перепишите код заменив оператор switch yf if..else */
/*
const value = 'c';

switch (value) {
    case 'a':
        console.log('a');
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('others');
        break;
    default:
        console.log('unknown');
}
*/
const value = 'c';

if (value === 'c') {
    console.log('a'); 
} else if (['b','c','d','e'].includes(value)){
    console.log('others');
} else console.log('unknown');
  