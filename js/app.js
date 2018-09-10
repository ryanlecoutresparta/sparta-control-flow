
var bool = true;

var name = 'Thing';

var num = 1;

// ===== IF/ELSE STATEMENTS =====
// Multiline Statement:
// if (num == 5) {
//   console.log('The condition is true');
// } else {
//   console.log('Not true!');
// }

// if (num == 4) {
//   console.log('equal to 4');
// } else if (num == 5){
//   console.log('equal to 5');
// } else {
//   console.log('not 4 or 5');
// }

// Singleline Statement:
// if (num == 4) console.log('True');

// OR STATEMENTS - USING ||

// if (num === '1' || bool === false) {
//   console.log('or statement is true');
// } else if (num === 1 && bool === true) {
//   console.log('and statement is true');
// } else {
//   console.log('neither is true');
// }

// SWITCH STATEMENTS
switch (name) {
  case 'Tim':
    console.log('Name is Tim');
    break;
  case 'Bean':
    console.log('Name is Bean');
    break;
  case 'Thing':
    console.log('Name is Thing');
    break;
  case 'Sheep':
    console.log('Name is Sheep');
    break;
  default:
    console.log('No match');
}
