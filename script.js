const InputStr = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const emptyInputError = () => {};
const getInputStr = () => {};
const cleanInputStr = (str) => {};

const reverseStr = (str) => {
    let reversedStr = "";

    for (const i = 0; i < str.length; i++) {
        reverseStr[i] = str[str.length - 1 - i];
    }
    return reverseStr;
};

const printResult = (isPalindrome) => {};

const checkInput = () => {
    const str = cleanInputStr(getInputStr());

    printResult(str === reverseStr(str));
};

checkBtn.addEventListener("click", checkInput);