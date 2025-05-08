let btn = document.querySelector(".btn-language");
let languageList = document.querySelector(".language-list");

btn.addEventListener("click", (outPord) => {
    let lisLun = document.querySelectorAll(".lis-lun");
    outPord.stopPropagation();
    languageList.classList.toggle("btn-show");
    lisLun.forEach((lun) => {
        lun.addEventListener("click", () => {
            languageList.classList.remove("btn-show");
        });
    });
});
document.addEventListener("click", (outPord) => {
    if (!languageList.contains(outPord.target) && !btn.contains(outPord.target)) {
        languageList.classList.remove("btn-show");
    }
});
let past = document.getElementById("paste");

past.addEventListener("click", () => {
    const her = document.querySelector('.hero-spinner');
    her.innerHTML = `
      <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
      </div>
    `;
    navigator.clipboard.readText().then((text) => {
        document.getElementById("input").value = text;
    });

    setTimeout(() => {
        her.innerHTML = "";
    }, 1000);
});

let pastTow = document.getElementById("paste");
if (innerWidth < 768) {
    pastTow.innerHTML = `<i class="fa-solid fa-paste"></i>`;
} else {
    pastTow.innerHTML = `<i class="fa-solid fa-paste"></i>`;
}