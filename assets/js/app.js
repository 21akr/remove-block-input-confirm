const block = document.querySelector(".container");
const btnRemove = document.querySelector(".btn--remove");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const newBlock = document.createElement("div");
newBlock.className = "huyco";

block.before(newBlock);

btnRemove.addEventListener("click", () => {
  btnGay();
});

input.addEventListener("input", () => {
  iAmGay();
});

function iAmGay() {
  if (input.value == "i am gay") {
    btnRemove.classList.add("btn--removing");
    block.remove;
  } else {
    btnRemove.classList.remove("btn--removing");
  }
}

function btnGay() {
  if (input.value != "i am gay") {
    alert('please type "i am gay" to confirm.');
  } else {
    newBlock.classList.remove("huyco");
  }
}
