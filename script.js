const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById('result');
const isP = true

const check = () => {
    const regex = /[\W - \d]/g;
    const wordOrPhrase = input.value.toLowerCase().replace(regex, '').split('');
    const reverse = input.value.toLowerCase().replace(regex, '').split('').reverse();
    const joined = input.value;
    
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

button.addEventListener('click', check);