
function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}



const string = prompt('Enter a string Name: ');

const result = reverseString(string)

document.write( `<h2>Reverse String Name is: `   + result);