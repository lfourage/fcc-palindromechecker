const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const specialCharacter = [
  { regex: /ç/g, replacer: 'c'},
  { regex: /é||è||ê||ë/g, replacer: 'e'},
  { regex: /à||â||ä/g, replacer: 'a'}
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
    cleaned.replace(specialCharacter[i].regex, specialCharacter[i].replacer);
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
