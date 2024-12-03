var copyButton = document.getElementById("copyButton")
var ipField = document.getElementById("ip")
async function copyToClipboard(){
    await Navigator.clipboard.writeText(ipField.value)
    //im too lazy to go make a proper hovertext thing, il do it later
    alert("Copied!")
}
function silly(){
    copyButton.addEventListener("click",copyToClipboard)
}
window.setTimeout(silly, 100);