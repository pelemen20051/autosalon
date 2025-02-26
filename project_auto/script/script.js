const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.querySelectorAll(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === "все марки" ||
        car.querySelector("h4").textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = "flex";
      } else {
        car.style.display = "none";
      }


      
    });

    carsContent.scrollIntoView({ behavior: "instant" });
  };
});

const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");

document.getElementById("order-action").addEventListener("click", function () {
  const fields = [carField, nameField, phoneField];

  let hasError = false;

  fields.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
      hasError = true;
    } else {
      field.style.borderColor = "white";
    }
  });

  // Проверяем, что номер телефона содержит не менее 10 символов
  if (phoneField.value.trim().length < 10) {
    phoneField.style.borderColor = "red";
    hasError = true;
  } else {
    phoneField.style.borderColor = "white";
  }

  if (!hasError) {
    alert("Спасибо за заявку! Мы скоро свяжемся с вами.");

    fields.forEach((field) => (field.value = ""));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");

  function checkFooterVisibility() {
    const rect = footer.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      footer.classList.add("show");
    }
  }

  window.addEventListener("scroll", checkFooterVisibility);
  checkFooterVisibility();
});
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const carItems = document.querySelectorAll(".car");

  carItems.forEach((car, index) => {
    car.style.animationDelay = `${index * 0.2}s`; // Устанавливаем задержку для каждой карточки
  });
});
window.addEventListener("scroll", function () {
  const video = document.querySelector(".main-video");
  video.classList.toggle("scroll", window.scrollY > 100);
});

document.getElementById("order-action").addEventListener("click", function () {
  let modal = document.getElementById("modal");
  modal.style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
