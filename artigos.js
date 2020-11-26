let ham = 0
document.getElementById("ham").addEventListener("click", () => {
    if (ham == 0) {
        $("#menu2").addClass("animate__animated animate__fadeInDown")
        document.getElementById("menu2").style.display = "flex"
        ham = 1
    } else {
        $("#menu2").removeClass("animate__animated animate__fadeInDown")
        $("#menu2").addClass("animate__animated animate__fadeOutUp")
        setTimeout(() => {
            document.getElementById("menu2").style.display = "none"
            $("#menu2").removeClass("animate__animated animate__fadeOutUp")
        }, 500)
        ham = 0
    }
})

$(".ac").click(() => {
    window.location.href = "../agendar.html"
})

document.getElementById("menu2").addEventListener("click", () => {
    $("#menu2").removeClass("animate__animated animate__fadeInDown")
    $("#menu2").addClass("animate__animated animate__fadeOutUp")
    setTimeout(() => {
        document.getElementById("menu2").style.display = "none"
        $("#menu2").removeClass("animate__animated animate__fadeOutUp")
    }, 500)
    ham = 0
})