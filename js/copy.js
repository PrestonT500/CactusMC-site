var copyButton = document.getElementById("copyButton")
var ipField = document.getElementById("ip")
async function copyToClipboard(){
    await Clipboard.writeText(ipField.value)
    //im too lazy to go make a proper hovertext thing, il do it later
    alert("Copied!")
}
copyButton.addEventListener("click",copyToClipboard)