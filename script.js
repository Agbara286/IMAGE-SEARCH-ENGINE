const accessKey = "pPMKBoageFhIVBj29ejJlS2gGgr-_O0nqvQ8cGtw45c";  // <-- put your real key here

const searchForm = document.getElementById("Search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showmorebutton = document.getElementById("show-more-button");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    
    if (page === 1) {
        searchResult.innerHTML = ""; 
    }

    const results = data.results;
    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    });

    showmorebutton.style.display = "block"; 
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});


showmorebutton.addEventListener("click", () => {
    page++;
    searchImage();
});
