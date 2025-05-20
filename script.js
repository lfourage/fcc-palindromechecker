const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const regexList = [
  { regex: /[^a-z0-9]/g, replacer: ''},
  { regex: /ç/g, replacer: 'c'},
  { regex: /é|è|ê|ë/g, replacer: 'e'},
  { regex: /à|â|ä/g, replacer: 'a'}
];

const emptyInputAlert = () => {
  result.innerText = "";
  textInput.value = "";
  alert("Please input a value");
};

const cleanInputStr = (str) => {
  let cleaned = str.toLowerCase();

  regexList.forEach(el => cleaned = cleaned.replace(el.regex, el.replacer));
  console.log(cleaned);
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
