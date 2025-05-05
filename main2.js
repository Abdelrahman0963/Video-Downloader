const translations = {
    ar: {
        languageText: 'اللغه <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Noto Kufi Arabic", sans-serif',
        title: 'تنزيل <span style="color:#db168f">فيديو انستغرام</span> بسرعة وسهولة مع SaveMedia',
        description: 'SaveMedia هو تطبيق يسمح لك باستخدام الوسائل التي تستخدمها لتنزيل فيديوهاتك من بسرعة وسهولة'
    },
    en: {
        languageText: 'Language <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Cal Sans", sans-serif',
        title: 'Fast and Easy <span style="color:#db168f">Instagram videos</span> Download With SaveMedia',
        description: 'SaveMedia is an app that allows you to use the tools you use to download your videos quickly and easily.'
    },
    fr: {
        languageText: 'la langue <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Cal Sans", sans-serif',
        title: 'Téléchargement rapide et facile de <span style="color:#db168f">Videos Instagram</span> avec SaveMedia',
        description: "SaveMedia est une application qui vous permet d'utiliser les moyens que vous utilisez pour télécharger vos vidéos à partir de vidéos Instagram rapidement et facilement."
    },
    it: {
        languageText: 'Lingua<i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Italiana", sans-serif',
        title: 'Scarica <span style="color:#db168f">video Instagram</span> in modo facile e veloce con SaveMedia',
        description: 'Save Media è un app che ti consente di utilizzare gli strumenti che usi per scaricare i tuoi video in modo rapido e semplice.',
    }
};
document.getElementById("ar").addEventListener("click", () => changeLanguage("ar"));
document.getElementById("en").addEventListener("click", () => changeLanguage("en"));
document.getElementById("fr").addEventListener("click", () => changeLanguage("fr"));
document.getElementById("it").addEventListener("click", () => changeLanguage("it"));


function changeLanguage(lang) {
    const data = translations[lang];
    const lun = document.getElementById("Language");
    const lun2 = document.getElementById("title-site-h1");
    const lun3 = document.getElementById("title-site-p");

    lun.innerHTML = data.languageText;
    lun.style.fontFamily = data.fontFamily;
    lun2.innerHTML = data.title;
    lun2.style.fontFamily = data.fontFamily;
    lun3.innerHTML = data.description;
    lun3.style.fontFamily = data.fontFamily;
    if (window.innerWidth <= 768) {
        lun.innerHTML = `<i class="fa-solid fa-globe"></i> <i class="fa-solid fa-angle-down"></i>`;;
    } else {

    }
    localStorage.setItem("lang", lang);
}
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    changeLanguage(savedLang);
});