import css from "./css/styles.css";
import ImgApi from "./js/apiService.js";
import template from "./templates/item.hbs";
import refs from "./js/refs.js";

const { form, gallery, loadMOreBtn } = refs;
const imgApi = new ImgApi();
console.log(imgApi);

form.addEventListener("submit", onSearch);
loadMOreBtn.addEventListener("click", onMoreSearch);

function onSearch(e) {
  e.preventDefault();
  gallery.innerHTML = "";
  // console.log(e.target.query.value);
  imgApi.searchQuery = e.target.query.value;

  if (imgApi.searchQuery === "") {
    return;
  }
  imgApi.resetPage();
  fetchCards();
}

function fetchCards() {
  return imgApi.getFetch().then((imgs) => {
    buildGallery(imgs);
    if (gallery.children) {
      loadMOreBtn.classList.remove("is-hidden");
    } else {
      loadMOreBtn.classList.add("is-hidden");
    }
  });
}

function onMoreSearch() {
  fetchCards();
  Scroll();
}

function buildGallery(img) {
  gallery.insertAdjacentHTML("beforeend", template(img));
}

function Scroll() {
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, 700);
}
