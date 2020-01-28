/*
//Stefan Maric
//switch statements

const subnet = 18;


switch(subnet) {
    case 15:
    ipAddress = '192.168.0.1';
        break;

    case 16:
        ipAddress = '192.168.0.1';
        break;

    case 17:
        ipAddress = '192.168.0.1';
        break;

    case 18:
        ipAddress = '192.168.355.1';
        break;
    default:
        console.log("None of them worked");
        break;
}
*/

//for loops

const groceryList = ['cake','mellon','apple','bananas'];

let x = groceryList.length;



let j;
let arr = [j];

j = prompt('Please enter the size of the array:');

for(let i = 0;i<x;i++) {
    arr = prompt("Please enter some values for the array:")
}

console.log(arr);