//Declaring all the elements from the HTML file
const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');

//This function will check if input is a palindrome
const check = () => {

    //This regular expresion will check for any numbers or non letter characters 
    const regex = /[\W - \d]/g;
    //Formatting base input in to an array changing letters to lower case and running my regex
    const wordOrPhrase = input.value.toLowerCase().replace(regex, '').split('');
    //Reversing user input and formatting 
    const reverse = input.value.toLowerCase().replace(regex, '').split('').reverse();
    //Original user input
    const joined = input.value;

    //If user input is empty an alert will be thrown 
    if(wordOrPhrase.length == 0){
        return alert('Please input a value')
    } else{
        //this will loop through wordOrPhrase and check if reverse matches up if not will return not palindrome
        //Otherwise function will return is palindrome
        for(let i = 0; i < wordOrPhrase.length; i++){
            if(reverse[i] !== wordOrPhrase[i]){
                return result.innerHTML = `
                <p><span id="bold">${joined}</span> is not a palindrome</p>
                `
            }
        }
        result.innerHTML = `
        <p><span id="bold">${joined}</span> is a palindrome</p>
        `
    }
}

//Added functionality to button
button.addEventListener('click', check);