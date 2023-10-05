let itemName
let price
const items = {
    // "item_id": ["price", "subtotal"]
}
// =====================================

function setItem(inItem) {
    itemName = inItem
}
function getItem() {
    return itemName
}


function setPrice(inPrice) {
    price = inPrice
}

function getPrice() {
    return price
}

// =====================================
function addToCart() {
    let quantity = document.getElementById("qty")

    // calc
    let subTotal = Number.parseInt(quantity.value) * getPrice()

    // adding to obj 
    items[getItem()] = [Number.parseInt(quantity.value), subTotal]

    // display 
    // window.alert("Item added to cart")
    // window.alert("*Subtotal is: R" + subTotal + "*")
    // console.log(subTotal)

    let showPrice = document.querySelector("#updatePrice")
    showPrice.innerHTML = `Subtotal is: R${subTotal}`

    // clearing the input
    quantity.value = ""
}
// =====================================

// using a bootstrap pop 
function addToCart1() {
    let quantity = document.getElementById("qty")
    quantity.innerHTML = ""

    // calc
    let subTotal = Number.parseInt(quantity.value) * getPrice()

    // adding to obj 
    items[getItem()] = [Number.parseInt(quantity.value), subTotal]

    // display 
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
    // or
    // const myModalAlternative = new bootstrap.Modal('#myModal', options)

    myModal
    // window.alert("Item added to cart")
    // window.alert("*Subtotal is: R" + subTotal + "*")
    // console.log(subTotal)
}
// =====================================

function testing() {
    // ex = document.querySelector("#exampleModal")
    ex = document.querySelector("#exampleModalLabel")
    ex.innerHTML = "tesing"

}
// =====================================


function displayTotal() {
    let sum = 0
    Object.values(items).forEach(val => {
        console.log(val)
        sum += val[1]
    })

    // testing
    // Object.entries(items).forEach(entry => {
    //     const [key, value] = entry;
    //     console.log(key, value);
    // });

    console.log("Total: " + sum)

    let showT = document.querySelector("#showTotal")
    showT.style.cssText = "padding:10px; text-align:center; color:white"
    showT.innerText = `Total: R${sum}`
}