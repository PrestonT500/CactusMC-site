var copyButton = document.getElementById("copyButton")
var ipField = document.getElementById("ip")
function sillyToClipboard(value) {
    navigator.clipboard.writeText(value)
  }
async function copyToClipboard(){
    //ik this function is deprecated, but the main clipboard api doesnt work for me
    sillyToClipboard(ipField.value)
    ipField.className = "bi bi-clipboard-check-fill"
    setTimeout(() => {
      ipField.className = "bi bi-clipboard"
    },6000)
    //im too lazy to go make a proper hovertext thing, il do it later
    alert(" IP Copied!")
}
copyButton.addEventListener("click",copyToClipboard)