let anya = document.getElementsByClassName("anya")
console.log(anya[0].innerText)

function anyafunction(){
    if (anya[0].innerText == "Аня не прогульщица") {
        anya[0].innerText = "Аня прогульщица"
    } else {
        anya[0].innerText = "Аня не прогульщица"
    }
}