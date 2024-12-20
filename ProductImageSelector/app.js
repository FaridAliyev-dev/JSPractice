const mainImageContainer = document.querySelector(".containerItems img");
const selectors = document.querySelectorAll(".imgSelector .selector, .imgSelector .selector1, .imgSelector .selector2");
selectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const clickedImageSrc = selector.querySelector("img").getAttribute("src");

    mainImageContainer.setAttribute("src", clickedImageSrc);
  });
});