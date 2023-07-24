const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");
const jsMain = document.querySelector(".js-main");

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close / Open mobile menu
const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".js-mobile-menu");
const headerHeight = header.clientHeight;

mobileMenu.addEventListener("click", () => {
  const isClose = header.clientHeight === headerHeight;
  isClose ? (header.style.height = "auto") : (header.style.height = null);
});

// Auto close when menu selection
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];
  const isParentMenu =
    menuItem.nextElementSibling &&
    menuItem.nextElementSibling.classList.contains("subnav");

  menuItem.onclick = (e) => {
    if (isParentMenu) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// Scroll top
const scrollTopBtn = document.querySelector(".js-scroll-btn");

window.onscroll = () => {
  const isTrue =
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  if (isTrue) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
