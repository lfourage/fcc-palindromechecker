const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const emptyInputAlert = () => {
  result.innerText = "";
  textInput.value = "";
  alert("Please input a value");
};

const cleanInputStr = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z0-9]/g, "");
};

const printResult = (isPalindrome) => {
  result.innerText = `
        ${textInput.value.trim()} is${isPalindrome ? "" : " not"} a palindrome
    `;
};

const checkInput = () => {
  if (!textInput.value.trim()) return emptyInputAlert();

  const str = cleanInputStr(textInput.value);

  printResult(str === str.split("").reverse().join(""));
  textInput.value = "";
};

checkBtn.addEventListener("click", checkInput);
textInput.addEventListener("keydown", (e) => { if (e.key === "Enter") checkInput(); });
