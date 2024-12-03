var copyButton = document.getElementById("copyButton")
var ipField = document.getElementById("ip")
function sillyToClipboard(value) {
    navigator.clipboard.writeText(value)
  }
async function copyToClipboard(){
    //ik this function is deprecated, but the main clipboard api doesnt work for me
    sillyToClipboard("ipField.value")
    //im too lazy to go make a proper hovertext thing, il do it later
    alert("Copied!")
}
copyButton.addEventListener("click",copyToClipboard)