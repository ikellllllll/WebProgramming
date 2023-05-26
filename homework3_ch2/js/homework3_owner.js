const listBox = document.querySelector(".list_box");
const listButton = listBox.querySelector("a");

const items = document.querySelectorAll(".item_list .item_box");
const itemsBox = document.querySelectorAll(".contain_item_list .contain_list .contain_item_box");
const cancelButton = document.querySelectorAll(".cancel_button");

const subButton = document.querySelectorAll(".item_count_box .sub_button");
const addButton = document.querySelectorAll(".item_count_box .add_button");

const totalCount = document.querySelector(".total .total_count");
const totalAmount = document.querySelector(".total_amount .amount");

// list 열기
listBox.addEventListener('click', () => {
    const isOpened = listButton.getAttribute('aria-expanded');

    if(isOpened === 'true') listButton.setAttribute('aria-expanded', false);
    else listButton.setAttribute('aria-expanded', true);
})

// list 클릭으로 요소 추가
items.forEach((item, index) => {
    item.addEventListener('click', () => addItemList(index));
})

// 삭제 버튼
cancelButton.forEach((button, index) => {
    button.addEventListener('click', () => removeItemList(index));
})

// 갯수 증가
addButton.forEach((button, index) => {
    button.addEventListener('click', () => addItemCount(index));
})

// 갯수 감소
subButton.forEach((button, index) => {
    button.addEventListener('click', () => subItemCount(index))
})

function addItemList(index) {
    if(itemsBox[index].getAttribute('aria-disabled') === 'false') {
        alert("이미 선택한 옵션입니다.");
    }
    else {
        itemsBox[index].setAttribute('aria-disabled', false);
        setItemCount(index, 1);
    }
}

function removeItemList(index) {
    itemsBox[index].setAttribute('aria-disabled', true);
    setItemCount(index, 0);
}

function setItemCount(index, count) {
    const itemCount = itemsBox[index].querySelector(".this_kind_count");
    itemCount.setAttribute('value', count);

    const totalAmount = itemsBox[index].querySelector(".this_kind_amount");
    setTotalAmount(totalAmount, count);

    subButtonChecking(index, count);

    initTotal();
}

function addItemCount(index) {
    const itemCount = itemsBox[index].querySelector(".this_kind_count");
    var count = parseInt(itemCount.getAttribute('value')) + 1;

    const totalAmount = itemsBox[index].querySelector(".this_kind_amount");
    setTotalAmount(totalAmount, count);

    itemCount.setAttribute('value', count);
    subButtonChecking(index, count);
    
    initTotal();
}

function subItemCount(index) {
    const itemCount = itemsBox[index].querySelector(".this_kind_count");
    var count = parseInt(itemCount.getAttribute('value')) - 1;

    const totalAmount = itemsBox[index].querySelector(".this_kind_amount");
    setTotalAmount(totalAmount, count);

    itemCount.setAttribute('value', count);
    subButtonChecking(index, count);

    initTotal();
}

function subButtonChecking(index, count) {
    const button = subButton[index];
    if(count == 1) {
        button.classList.add("disabled");
        button.setAttribute('disabled', '');
    }
    else {
        button.classList.remove("disabled");
        button.removeAttribute('disabled', '');
    }
}

function setTotalAmount(totalAmount, count) {
    const amount = 730000 * count;
    totalAmount.textContent = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function initTotal() {
    // total count
    var count = 0;
    itemsBox.forEach((itemBox) => {
        const thisCount = itemBox.querySelector(".this_kind_count")
        count += parseInt(thisCount.getAttribute('value'));
    })
    totalCount.textContent = "총 수량 " + count.toString() + " 개";

    // total amount
    setTotalAmount(totalAmount, count);
}