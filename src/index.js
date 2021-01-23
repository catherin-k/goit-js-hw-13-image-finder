import css from "./css/styles.css";
import ImgApi from "./js/apiService.js";
import template from "./templates/item.hbs";
import refs from "./js/refs.js";

const { form, searchBtn, gallery, loadMOreBtn } = refs;
const imgApi = new ImgApi();
console.log(imgApi);

form.addEventListener("submit", onSearch);
loadMOreBtn.addEventListener("click", onMoreSearch);

function onSearch(e) {
  e.preventDefault();
  gallery.innerHTML = "";
  console.log(e.target.query.value);
  imgApi.searchQuery = e.target.query.value;
  return imgApi.getFetch().then((imgs) => {
    buildGallery(imgs);

    console.log(imgs);
  });
}
function onMoreSearch() {
  //
}

function buildGallery(img) {
  gallery.insertAdjacentHTML("beforeend", template(img));
}
