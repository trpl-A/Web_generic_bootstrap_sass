// SCRAP

// function click1() {
//     let v = window.prompt("Add Item 1 to cart", "Enter a quantity of this item")
//     console.log(v)

//     // window.open("http://www.google.com",
//     //     "mywindow", "menubar=1,resizable=1,width=350,height=250");

//     window.open("http://www.google.com", "width=500", "height=250");

//     // let correctInput = false


//     // while (!correctInput) {

//     //     // v = prompt("Please try again and enter your number");
//     //     if (Number.isInteger(v)) {
//     //         correctInput = true
//     //     }
//     // }

//     // else {
//     //     correctInput = true
//     //     window.alert("added item")
//     // }
// }

fetch("./user_info.json")
    .then(data => data.json())
    .then(d => showI(d));

// console.log(d)

function showI(d) {
    console.log(d)
}

// showI()