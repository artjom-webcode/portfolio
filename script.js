/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("header--shadow");
  else header.classList.remove("header--shadow");
}
window.addEventListener("scroll", scrollHeader);

/*=============== DARK MODE ===============*/

const darkModeBtn = document.querySelector(".dark-mode-btn");

/* Проверяем не менял ли тему пользователь. Первая загрузка страница фон белый.
Но если пользователь переключил тему, то при следующей загрузки будет темная тема.  */
if (localStorage.getItem("DarkMode") === "dark") {
  darkModeBtn.classList.toggle("dark-mode-btn--active");
  document.body.classList.toggle("dark-mode");
}

/* При нажатии на кнопку. Меняем ползунок и на боди навешиваем класс который меняет у переменных значение.  */
darkModeBtn.addEventListener("click", function () {
  darkModeBtn.classList.toggle("dark-mode-btn--active");
  const isDark =
    document.body.classList.toggle("dark-mode"); /* toggle возаращет true  если класс добавлен. */

  if (isDark) {
    localStorage.setItem("DarkMode", "dark");
  }
  if (!isDark) {
    localStorage.setItem("DarkMode", "light");
  }
});
