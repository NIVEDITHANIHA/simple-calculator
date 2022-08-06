//displaying input
function buttonClick(val) {
    document.getElementById("screen").value =  document.getElementById("screen").value +val;

    
}
//clear result
function clearDisplay( ) {
    document.getElementById("screen").value = " "
    
}
//solving
function equalClick( ) {
    var text =  document.getElementById("screen").value 
    var result = eval(text)
    document.getElementById("screen").value = result
    
}
