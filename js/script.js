// Nhúng phần header vào trong trang
fetch("../partials/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => console.log("Có lỗi xảy ra khi tải header:", error));

// Nhúng phần footer vào trong trang
fetch("../partials/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.log("Có lỗi xảy ra khi tải footer:", error));

// Giả lập trạng thái đăng nhập (bạn có thể thay bằng kiểm tra thực tế từ localStorage, cookie, API...)
const isLoggedIn = localStorage.getItem("user"); // ví dụ: "true" nếu đã đăng nhập

const authButtons = document.getElementById("auth-buttons");

if (isLoggedIn) {
  authButtons.innerHTML = `
        <a class="nav__link" href="../QLTKCáNhân-longle/profile.html">
          <img
            src="./assets/images/avata.png"
            alt="Avatar"
            class="header__logo"
            style="width: 30px; height: 30px; border-radius: 50%"
          />
          <span style="color: white; margin-left: 8px;">Quang Long</span>
        </a>
      `;
}
// =======================
// Scroll đổi màu Header
// =======================
var header = document.getElementById("header");
var login = document.querySelector(".Login");
var textLogin = document.querySelector(".Login li a");

window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    header.style.background = "rgba(0, 0, 0, 0.8)";
    if (login) login.style.backgroundColor = "#00FFCC";
    if (textLogin) {
      textLogin.style.color = "#000";
      textLogin.style.fontWeight = "500";
    }
  } else {
    header.style.background = "rgba(0, 0, 0, 0.2)";
    if (login) login.style.backgroundColor = "#080707";
    if (textLogin) textLogin.style.color = "#fff";
  }
});

// ============================
// Chuyển ảnh nền tự động
// ============================
const images = [
  "url('../assets/images/nen1.png')",
  "url('../assets/images/nen2.png')",
  "url('../assets/images/nen3.png')",
];
let index = 0;

function changeBackground() {
  const bg = document.querySelector(".background");
  if (!bg) return;

  bg.style.opacity = 0;
  setTimeout(() => {
    bg.style.backgroundImage = images[index];
    bg.style.opacity = 1;
  }, 300);

  index = (index + 1) % images.length;
}

setInterval(changeBackground, 2000);
