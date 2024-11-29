document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const navbarOffset = navbar.offsetTop;

  // スクロールイベントの登録
  const handleScroll = () => {
      if (window.scrollY >= navbarOffset) {
          navbar.classList.add("fixed");
      } else {
          navbar.classList.remove("fixed");
      }
  };

  // スクロールイベントを監視
  window.addEventListener("scroll", handleScroll);
});
