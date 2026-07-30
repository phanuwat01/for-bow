const pages = [
`สวัสดีโบว์ 💝`,

`หน้าที่ 2`,

`หน้าที่ 3`,

`หน้าที่ 4`,

`หน้าที่ 5`,

`หน้าที่ 6`,

`หน้าสุดท้าย 💝`
];

let currentPage = 0;
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
updatePage();
});
function updatePage() {

    document.getElementById("story-text").innerText = pages[currentPage];

    document.getElementById("page-number").innerText =
        `${currentPage + 1} / ${pages.length}`;

    const dots = [];

    for (let i = 0; i < pages.length; i++) {
        dots.push(i === currentPage ? "●" : "○");
    }

    document.getElementById("dots").innerText = dots.join(" ");
}

document.getElementById("next-btn").addEventListener("click", function () {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});
