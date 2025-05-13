const container = document.querySelector(".food__list");
const template = document.querySelector("#food-template");
const foodData = [
  {
    img: "../assets/images/food1.png",
    title: "Cơm Mâm Đồng Việt Nam",
    price: "Giá chỉ từ 390,000VNĐ net/khách",
    desc: "Thực đơn đậm đà hương vị Việt với các món ăn truyền thống từ Bắc đến Nam.",
    details: [
      "Phục vụ từ 2 khách trở lên",
      "Đặt món trước 13:30 và 20:30",
      "Thực đơn thay đổi theo ngày",
    ],
    time: "11:30 – 14:00 | 18:00 – 21:00",
  },
  {
    img: "../assets/images/food2.png",
    title: "Buffet Hải Sản & Bít Tết",
    price: "Chỉ từ 890,000VNĐ net/người",
    desc: "Trải nghiệm hải sản tươi sống và các loại bít tết thượng hạng tại nhà hàng Café Indochine.",
    details: [
      "Tôm hùm, hàu tươi, sushi, sashimi",
      "Quầy bít tết bò Úc/đà điểu",
      "Tráng miệng đa dạng: bánh, kem, trái cây",
    ],
    time: "18:30 – 22:00 (Thứ 6 & Thứ 7)",
  },
  {
    img: "../assets/images/food3.png",
    title: "Tiệc Buffet Sáng Quốc Tế",
    price: "Bao gồm trong giá phòng hoặc 450,000VNĐ net/người",
    desc: "Thưởng thức bữa sáng đa dạng phong cách Á - Âu với hơn 50 món ăn mỗi ngày.",
    details: [
      "Bánh mì Pháp, mì Ý, phở Việt",
      "Quầy trứng theo yêu cầu",
      "Nước ép, cà phê và trà tươi",
    ],
    time: "06:30 – 10:00 hàng ngày",
  },
  {
    img: "../assets/images/food4.png",
    title: "Set Menu Trưa Đậm Đà Việt Nam",
    price: "Giá chỉ từ 490,000VNĐ net/người",
    desc: "Thực đơn trưa đầy đủ dưỡng chất với các món ăn truyền thống Việt Nam tinh tế.",
    details: [
      "Gồm món khai vị, món chính, canh và tráng miệng",
      "Thích hợp cho khách đi công tác, gia đình",
      "Thực đơn thay đổi mỗi tuần",
    ],
    time: "11:30 – 14:00 (Thứ 2 – Thứ 6)",
  },
  {
    img: "../assets/images/food5.png",
    title: "Bữa Tối Lãng Mạn Bên Biển",
    price: "1,200,000VNĐ net/cặp đôi",
    desc: "Trải nghiệm bữa tối riêng tư dưới ánh nến với gió biển mát lành.",
    details: [
      "Gồm 5 món + 1 chai rượu vang nhập khẩu",
      "Trang trí bàn tiệc với hoa và nến",
      "Cần đặt chỗ trước ít nhất 24h",
    ],
    time: "17:30 – 20:30 hàng ngày",
  },
  {
    img: "../assets/images/food6.png",
    title: "Ẩm Thực Đường Phố Việt Nam",
    price: "390,000VNĐ net/người",
    desc: "Thưởng thức các món đặc sản đường phố như bánh xèo, bún chả, gỏi cuốn tại không gian sang trọng.",
    details: [
      "Phục vụ buffet với quầy chế biến trực tiếp",
      "Thực đơn thay đổi theo mùa",
      "Có lựa chọn chay & không gluten",
    ],
    time: "18:00 – 21:00 (Thứ 3 & Chủ Nhật)",
  },
  {
    img: "../assets/images/food7.png",
    title: "Lẩu Hải Sản Chua Cay",
    price: "590,000VNĐ net/nồi (2–3 người)",
    desc: "Nồi lẩu hải sản nóng hổi với hương vị chua cay đặc trưng, thích hợp cho buổi tối ấm cúng.",
    details: [
      "Tôm, mực, cá, nghêu tươi",
      "Ăn kèm bún và rau sống",
      "Phục vụ tại bàn",
    ],
    time: "17:00 – 21:30 hàng ngày",
  },
  {
    img: "../assets/images/food8.png",
    title: "Set Menu Chay Thanh Đạm",
    price: "450,000VNĐ net/người",
    desc: "Thực đơn thuần chay với nguyên liệu hữu cơ, mang lại trải nghiệm nhẹ nhàng và bổ dưỡng.",
    details: [
      "Gồm 4 món: soup, món chính, cơm, tráng miệng",
      "Không dùng bột ngọt, đường hóa học",
      "Thích hợp cho người ăn kiêng",
    ],
    time: "11:00 – 14:00 | 18:00 – 20:00",
  },
];

foodData.forEach((item) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("img").src = item.img;
  clone.querySelector("img").alt = item.title;
  clone.querySelector(".food__heading").textContent = item.title;
  clone.querySelector(".btn__yellow .food__price").textContent = item.price;
  clone.querySelectorAll(".desc__food")[0].textContent = item.desc;

  const list = clone.querySelector(".list__desc");
  item.details.forEach((detail) => {
    const li = document.createElement("li");
    li.className = "desc__item";
    li.textContent = detail;
    list.appendChild(li);
  });

  clone.querySelectorAll(".desc__food")[1].innerHTML = `⏰ ${item.time}`;
  container.appendChild(clone);
});
/*Search  */
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filteredFoods = foodData.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );
  renderFoods(filteredFoods); // Gọi lại render với dữ liệu lọc
});
function renderFoods(data) {
  container.innerHTML = ""; // Xóa cũ
  data.forEach((food) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("img").src = food.img;
    clone.querySelector("img").alt = food.title;
    clone.querySelector(".food__heading").textContent = food.title;
    clone.querySelector(".food__price").textContent = food.price;
    clone.querySelectorAll(".desc__food")[0].textContent = food.desc;
    clone.querySelectorAll(".desc__food")[1].textContent = food.time;

    const ul = clone.querySelector(".list__desc");
    ul.innerHTML = "";
    food.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      ul.appendChild(li);
    });

    container.appendChild(clone);
  });
}

// Gọi khi trang load
renderFoods(foodData);
