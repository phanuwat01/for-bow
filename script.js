window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("password-screen").style.display = "block";
    }, 2000);
};

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "240326") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "block";
    } else {
        document.getElementById("error").innerText = "รหัสผ่านไม่ถูกต้อง 💔";
    }
}
document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("story-screen").style.display = "block";
});
