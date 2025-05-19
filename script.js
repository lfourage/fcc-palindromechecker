const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const specialCharacter = [
  { special: /ç/g, norm: 'c'},
  { special: /é||è||ê||ë/g, norm: 'e'},
  { special: /à||â||ä/g, norm: 'a'}
];

const emptyInputAlert = () => {
  result.innerText = "";
  textInput.value = "";
  alert("Please input a value");
};

const cleanInputStr = (str) => {
  const cleaned = str.toLowerCase();
  const regex = /[^a-z0-9]/g;

  cleaned.replace(regex, "");
  for (let i = 0; i < specialCharacter.length; i++) {
    cleaned.replace(specialCharacter[i].special, specialCharacter[i].norm);
  }
  return cleaned;
};

const printResult = (isPalindrome) => {
  result.innerText = `
        ${textInput.value.trim()} is${isPalindrome ? "" : " not"} a palindrome
    `;
};

const checkInput = () => {
  if (!textInput.value.trim()) return emptyInputAlert();

  const str = cleanInputStr(textInput.value);

  printResult(str === str.split('').reverse().join(''));
  textInput.value = "";
};

checkBtn.addEventListener("click", checkInput);
