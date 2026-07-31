const pages = [
`สวัสดีโบว์ 💝

ก่อนอื่น…

ขอบคุณที่กดเข้ามาอ่านเว็บเล็ก ๆ เว็บนี้นะ 🤍`,

`มีหลายอย่างที่เวฟ

ไม่ค่อยพูดออกไปตรง ๆ

เลยอยากใช้พื้นที่เล็ก ๆ แห่งนี้

บอกความรู้สึกทั้งหมด

ให้โบว์ได้อ่าน`,

`ตั้งแต่วันที่โบว์เข้ามาในชีวิต

ทุกอย่างมันค่อย ๆ อบอุ่นขึ้น

ไม่ว่าจะเป็นเรื่องของกิน

เรื่องของใช้

เสื้อผ้า

หรือแม้แต่การวางแผนพาเวฟไปเที่ยว

โบว์ดูแลเวฟ

ในรายละเอียดเล็ก ๆ

จนบางครั้ง

เวฟก็ไม่รู้จะขอบคุณยังไงให้พอ`,

`สิ่งที่เวฟมีความสุขที่สุด

ไม่ใช่ของที่โบว์ให้

แต่คือความรู้สึก…

ที่รู้ว่า

มีคนคนหนึ่ง

คอยนึกถึงเวฟเสมอ`,

`ทุกครั้งที่ได้คุยกับโบว์

เวฟรู้สึกสบายใจ

รู้สึกอบอุ่น

และยิ้มได้

โดยไม่ต้องฝืน`,

`เวฟเคยคิดนะ…

ว่าคนดี ๆ แบบโบว์

ทำไมถึงมาเลือกเวฟ

และจนถึงวันนี้

เวฟก็ยังรู้สึกว่า

ตัวเองเป็นคนที่โชคดีมาก`,

`💝

(รูปของเราจะอยู่หน้านี้)

ขอบคุณนะ…

ที่เข้ามาเปลี่ยนชีวิตของเวฟ

ให้มีรอยยิ้มมากขึ้น

ขอบคุณที่คอยซัพพอร์ตเวฟ

ในวันที่เวฟเก่ง

และในวันที่เวฟไม่เก่ง

เวฟอาจไม่ได้เป็นคนที่สมบูรณ์แบบ

แต่เวฟสัญญาว่า…

จะพยายามดูแลโบว์ให้ดีที่สุด

และจะรักโบว์ให้มากในทุก ๆ วัน

เวฟรักโบว์นะ 💝`
];let currentPage = 0;
let typing = false;
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
    currentPage = 0;
    updatePage();
});
async function updatePage() {
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
nextBtn.style.display = "none"; 
const story = document.getElementById("story-text");

story.innerHTML = "";
typing = true;
const lines = pages[currentPage].split("\n");    

    document.getElementById("page-number").innerText =
        `${currentPage + 1} / ${pages.length}`;

    const dots = [];

    for (let i = 0; i < pages.length; i++) {
        dots.push(i === currentPage ? "●" : "○");
    }

    document.getElementById("dots").innerText = dots.join(" ");
for (const line of lines) {

    const p = document.createElement("p");

    p.style.opacity = "0";

    p.style.transition = "0.5s";

    p.innerHTML = line === "" ? "&nbsp;" : line;

    story.appendChild(p);

    await new Promise(resolve => setTimeout(resolve, 500));

    p.style.opacity = "1";
}
typing = false;

    prevBtn.style.display = currentPage === 0 ? "none" : "inline-block";

nextBtn.style.display =
    currentPage === pages.length - 1 ? "none" : "inline-block";
}

document.getElementById("next-btn").addEventListener("click", function () {
if (typing) return;
if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

document.getElementById("prev-btn").addEventListener("click", function () {
    if (typing) return;
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});
