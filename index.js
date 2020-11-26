let ham = 0
document.getElementById("ham").addEventListener("click", () => {
    if (ham == 0) {
        document.getElementById("menu2").style.display = "flex"
        ham = 1
    } else {
        document.getElementById("menu2").style.display = "none"
        ham = 0
    }
})

document.getElementById("menu2").addEventListener("click", () => {
    document.getElementById("menu2").style.display = "none"
    ham = 0
})