var copyButton = document.getElementById("copyButton")
var ipField = document.getElementById("ip")
async function copyToClipboard(){
    //ik this function is deprecated, but the main clipboard api doesnt work for me
    Document.execCommand("copy",false,ipField.value)
    //im too lazy to go make a proper hovertext thing, il do it later
    alert("Copied!")
}
function silly(){
    copyButton.addEventListener("click",copyToClipboard)
}
window.setTimeout(silly, 100);