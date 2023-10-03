let itemName

const items = {}

function setItem(inItem) {
    itemName = inItem
}
function getItem() {
    return itemName
}


function addToCart() {
    let quantity = document.getElementById("qty")
    quantity.innerText = ""
    items[getItem()] = Number.parseInt(quantity.value)

    // display 
    console.log(quantity.value)
    window.alert("Item added to cart")
    console.log(items)
    // console.log(getItem())
}