const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const emptyInputAlert = () => {
  alert("Please input a value");
  result.innerText = "";
  return "";
};

const getInputStr = () => {
  const str = textInput.value;

  return str;
};

const cleanInputStr = (str) => {
  const cleaned = str.toLowerCase();
  const regex = /[^a-z0-9]/g;

  if (!str) return "";
  return cleaned.replace(regex, "");
};

const reverseStr = (str) => {
  return str.split('').reverse().join('');
};

const printResult = (isPalindrome) => {
  result.innerText = `
        ${textInput.value.trim()} is${isPalindrome ? "" : " not"} a palindrome
    `;
};

const resetTextInput = () => {
  textInput.value = "";
};

const checkInput = () => {
  if (!textInput.value) return emptyInputAlert();

  const str = cleanInputStr(getInputStr());

  printResult(str === reverseStr(str));
  resetTextInput();
};

checkBtn.addEventListener("click", checkInput);
