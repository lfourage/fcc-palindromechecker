const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const emptyInputError = () => {
    alert('Please input a value');
    return "";
};

const getInputStr = () => {
    const str = textInput.value;
    
    return str ? str : emptyInputError();
};

const cleanInputStr = (str) => {
    const cleaned = str;

    if (!str)
        return "";
    return cleaned;
};

const reverseStr = (str) => {
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        reversedStr += str[str.length - 1 - i];
    }
    return reversedStr;
};

const printResult = (isPalindrome) => {
    result.innerText = `${textInput.value} is${isPalindrome ? "" : " not"} a palindrome`;
};

const resetTextInput = () => {
    textInput.value = "";
};

const checkInput = () => {
    const str = cleanInputStr(getInputStr());

    if (str)
        printResult(str === reverseStr(str));
    resetTextInput();
};

checkBtn.addEventListener("click", checkInput);