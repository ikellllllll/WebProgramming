const miniImage = document.querySelectorAll(".image_li");
const mainImage = document.querySelector(".image img");
const btnPrev = document.querySelector(".buttonPrev");
const btnNext = document.querySelector(".buttonNext");

const list = document.querySelector(".list");
const listBtn = list.querySelector("a");

const itemColor = document.querySelectorAll(".color_list_ul .item_color");
const itemBox = document.querySelectorAll(".item_container .item_ul .item_li");
const btnCancel = document.querySelectorAll(".btnCancel");
const btnMinus = document.querySelectorAll(".count_box .btnMinus");
const btnPlus = document.querySelectorAll(".count_box .btnPlus");

const totalCount = document.querySelector(".total_count .total_count_text");
const totalAmount = document.querySelector(".total_amount .amount");

let curIndex = 0;

// img
function selectImg(index) {
  for (let i = 0; i < miniImage.length; i++) {
    if (i == index) miniImage[i].setAttribute("aria-selected", true);
    else miniImage[i].setAttribute("aria-selected", false);
  }

  mainImage.setAttribute(
    "src",
    miniImage[index].querySelector("img").getAttribute("src")
  );
}

miniImage.forEach((image, index) => {
  image.addEventListener("mouseover", () => {
    curIndex = index;
    selectImg(index);
  });
});

btnPrev.addEventListener("click", () => {
  if (curIndex <= 0) curIndex = miniImage.length;

  selectImg(--curIndex);
});

btnNext.addEventListener("click", () => {
  if (curIndex >= miniImage.length - 1) curIndex = -1;

  selectImg(++curIndex);
});

// content
list.addEventListener("click", () => {
  const isOpen = listBtn.getAttribute("aria-expanded");

  if (isOpen === "true") listBtn.setAttribute("aria-expanded", false);
  else listBtn.setAttribute("aria-expanded", true);
});

itemColor.forEach((item, index) => {
  item.addEventListener("click", () => addItemList(index));
});

btnCancel.forEach((button, index) => {
  button.addEventListener("click", () => removeItemList(index));
});

btnPlus.forEach((button, index) => {
  button.addEventListener("click", () => plusItemCount(index));
});

btnMinus.forEach((button, index) => {
  button.addEventListener("click", () => minusItemCount(index));
});

function addItemList(index) {
  if (itemBox[index].getAttribute("aria-disabled") === "false") {
    alert("이미 선택한 옵션입니다.");
  } else {
    itemBox[index].setAttribute("aria-disabled", false);
    setItemCount(index, 1);
  }
}

function removeItemList(index) {
  itemBox[index].setAttribute("aria-disabled", true);
  setItemCount(index, 0);
}

function setItemCount(index, count) {
  const itemCount = itemBox[index].querySelector(".item_count");

  // if(count === 1) {
  //     itemCount.setAttribute('value', 1);
  // } else {
  //     itemCount.setAttribute('value', null);
  // }

  itemCount.setAttribute("value", count);

  const totalAmount = itemBox[index].querySelector(".price_box_price");
  setTotalAmount(totalAmount, count);

  btnMinusValid(index, count);

  setTotalCount();
}

function plusItemCount(index) {
  const itemCount = itemBox[index].querySelector(".item_count");
  var count = parseInt(itemCount.getAttribute("value")) + 1;

  const totalAmount = itemBox[index].querySelector(".price_box_price");
  setTotalAmount(totalAmount, count);

  itemCount.setAttribute("value", count);
  btnMinusValid(index, count);

  setTotalCount();
}

function minusItemCount(index) {
  const itemCount = itemBox[index].querySelector(".item_count");
  var count = parseInt(itemCount.getAttribute("value")) - 1;

  const totalAmount = itemBox[index].querySelector(".price_box_price");
  setTotalAmount(totalAmount, count);

  itemCount.setAttribute("value", count);
  btnMinusValid(index, count);

  setTotalCount();
}

function btnMinusValid(index, count) {
  const button = btnMinus[index];
  if (count == 1) {
    button.classList.add("disabled");
    button.setAttribute("disabled", "");
  } else {
    button.classList.remove("disabled");
    button.removeAttribute("disabled", "");
  }
}

function setTotalAmount(totalAmount, count) {
  const amount = 730000 * count;
  totalAmount.textContent = amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setTotalCount() {
  var count = 0;
  itemBox.forEach((itemBox) => {
    const thisCount = itemBox.querySelector(".item_count");
    count += parseInt(thisCount.getAttribute("value"));
  });
  totalCount.textContent = "총 수량 " + count.toString() + " 개";

  setTotalAmount(totalAmount, count);
}
