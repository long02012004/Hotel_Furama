document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (không reload trang)

    // Lấy các giá trị từ form
    const emailPhone = document.getElementById("emailPhone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsChecked = document.getElementById("termsCheckbox").checked;

    // Kiểm tra các trường đã được điền đầy đủ
    if (!emailPhone || !password || !confirmPassword || !termsChecked) {
      alert("Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản!");
      return;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }

    // Kiểm tra tính hợp lệ của email hoặc số điện thoại (ví dụ đơn giản)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(emailPhone) && !phoneRegex.test(emailPhone)) {
      alert("Vui lòng nhập email hoặc số điện thoại hợp lệ!");
      return;
    }

    // Tạo một đối tượng đăng ký để có thể gửi thông tin
    const userData = {
      emailPhone: emailPhone,
      password: password,
    };

    // Lưu dữ liệu đăng ký (ví dụ: gửi qua API hoặc lưu vào localStorage)
    localStorage.setItem("userData", JSON.stringify(userData)); // Lưu vào localStorage (hoặc API)

    // Chuyển hướng đến trang chính (hoặc trang home)
    window.location.href = "../index.html"; // Thay đổi theo đường dẫn của trang chính
  });
