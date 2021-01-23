const baseUrl = "https://pixabay.com/api/";
const key = "19947023-b7017f4974f73f87e742a194c";
// const key = "19947023-b7017f4974f73f87e742a194c";
// export default function getFetch(searchQuery, page) {
//   const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data.hits)
//     .catch((error) => console.log(error));
// }
export default class ImgApi {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }

  getFetch() {
    console.log("Before:", this);
    const url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=3&key=${key}`;

    return fetch(url)
      .then((response) => response.json())
      .then(({ hits }) => {
        this.setPage();

        return hits;
      });
    // const response = await fetch(baseUrl + params);
    // const result = await response.json();
    // this.setPage();
    // return result.hits;
  }
  setPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
