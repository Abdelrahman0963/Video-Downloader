const translations = {
    ar: {
        languageText: 'اللغه <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Noto Kufi Arabic", sans-serif',
        title: 'تنزيل <span style="color:#db168f">فيديو انستغرام</span> بسرعة وسهولة مع SaveMedia',
        description: 'SaveMedia هو تطبيق يسمح لك باستخدام الوسائل التي تستخدمها لتنزيل فيديوهاتك من بسرعة وسهولة',
        buttonText: 'تنزيل',
        pasteText: '<i class="fa-solid fa-paste"></i> الصق',
        titleHead: 'كيفية التحميل من <span style="color:#db168f"> انستغرام؟</span> ',
        titleHeadP: `لتنزيل مقاطع الفيديو من Instagram، تحتاج إلى نسخ عنوان URL للفيديو الذي تريد تنزيله ولصقه في حقل الإدخال.`,
        cardOneH1: `<h1 style="text-align: right">نسخ عنوان الرابط </h1>`,
        cardOneH3: `<h3 style="text-align: right">افتح تــطبيق الانستغرام او الموقع الالكتروني ونسخ عنوان الرابط الذي تريد تنزيله</h3>`,
        cardTwoH1: `<h1 style="text-align: right">الصق عنوان الرابط</h1>`,
        cardTwoH3: `<h3 style="text-align: right">افتح تطبيق الانستجرام أو الموقع الإلكتروني والصق عنوان URL للفيديو أو الصورة أو البكرات أو القصة أو IGTV الذي تريد تنزيله</h3>`,
        cardThreeH1: `<h1 style="text-align: right">تـنــزيل</h1>`,
        cardThreeH3: `<h3 style="text-align: right">بسرعة IGTV يمكنك تنزيل الفيديو والصور والبكرات والقصة و  </h3>`,
    },
    en: {
        languageText: 'Language <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Cal Sans", sans-serif',
        title: 'Fast and Easy <span style="color:#db168f">Instagram videos</span> Download With SaveMedia',
        description: 'SaveMedia is an app that allows you to use the tools you use to download your videos quickly and easily.',
        buttonText: 'Download',
        pasteText: 'Paste <i class="fa-solid fa-paste"></i>',
        titleHead: '<span style="color:#db168f">Instagram?</span> How to download from ',
        titleHeadP: `To download videos from Instagram, you need to copy the URL of the video you want to download and paste it in the input field.`,
        cardOneH1: `Copy the URL`,
        cardOneH3: `Copy the URL of the video you want to download and paste it in the input field.`,
        cardTwoH1: `Paste the URL`,
        cardTwoH3: `Open the Instagram app or website and paste the URL of the video or image or reels or IGTV you want to download.`,
        cardThreeH1: `Download`,
        cardThreeH3: `Quickly you can download the video, photo, reels, story, IGTV`,

    },
    fr: {
        languageText: 'la langue <i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Cal Sans", sans-serif',
        title: 'Téléchargement rapide et facile de <span style="color:#db168f">Videos Instagram</span> avec SaveMedia',
        description: "SaveMedia est une application qui vous permet d'utiliser les moyens que vous utilisez pour télécharger vos vidéos à partir de vidéos Instagram rapidement et facilement.",
        buttonText: 'Télécharger',
        pasteText: 'Coller <i class="fa-solid fa-paste"></i>',
        titleHead: '<span style="color:#db168f">Instagram?</span> Comment telecharger de ',
        titleHeadP: `Pour telecharger des videos de Instagram, vous devez copier l'URL du video que vous souhaitez telecharger et le coller dans le champ de saisie.`,
        cardOneH1: `Copier l'URL`,
        cardOneH3: `Copier l'URL du video que vous souhaitez telecharger et le coller dans le champ de saisie.`,
        cardTwoH1: `Coller l'URL`,
        cardTwoH3: `Ouvrir l'application Instagram ou le site web et coller l'URL du video ou de l'image ou des reels ou IGTV que vous souhaitez telecharger.`,
        cardThreeH1: `Télécharger`,
        cardThreeH3: `Rapidement vous pouvez telecharger la video, l'image, les reels, l'histoire, IGTV`,
    },
    it: {
        languageText: 'Lingua<i class="fa-solid fa-angle-down"></i>',
        fontFamily: '"Italiana", sans-serif',
        title: 'Scarica <span style="color:#db168f">video Instagram</span> in modo facile e veloce con SaveMedia',
        description: 'Save Media è un app che ti consente di utilizzare gli strumenti che usi per scaricare i tuoi video in modo rapido e semplice.',
        buttonText: 'Scarica',
        pasteText: 'Incolla <i class="fa-solid fa-paste"></i>',
        titleHead: '<span style="color:#db168f">Instagram?</span> Come scaricare da ',
        titleHeadP: `Per scaricare video da Instagram, devi copiare l'URL del video che vuoi scaricare e incollarlo nel campo di input.`,
        cardOneH1: `Copia l'URL`,
        cardOneH3: `Copia l'URL del video che vuoi scaricare e incollarlo nel campo di input.`,
        cardTwoH1: `Incolla l'URL`,
        cardTwoH3: `Apri l'applicazione Instagram o il sito web e incolla l'URL del video o dell'immagine o dei reels o IGTV che vuoi scaricare.`,
        cardThreeH1: `Scarica`,
        cardThreeH3: `Velocemente puoi scaricare il video, l'immagine, i reels, la storia, IGTV`,
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
    const btn = document.getElementById("donwload");
    const pasteBtn = document.getElementById("paste");
    const pUrl = document.getElementById("p-url");
    const pUrl2 = document.getElementById("p-url-2");
    const titleHeadone = document.getElementById("laren-title-h1");
    const titleHeadTow = document.getElementById("laren-title-p");
    const cardOne = document.getElementById("card-one-h1");
    const cardOne2 = document.getElementById("card-one-h3");
    const cardTwo = document.getElementById("card-two-h1");
    const cardTwo2 = document.getElementById("card-two-h3");
    const cardThree = document.getElementById("card-three-h1");
    const cardThree2 = document.getElementById("card-three-h3");
    lun.innerHTML = data.languageText;
    lun.style.fontFamily = data.fontFamily;
    lun2.innerHTML = data.title;
    lun2.style.fontFamily = data.fontFamily;
    lun3.innerHTML = data.description;
    lun3.style.fontFamily = data.fontFamily;
    btn.innerHTML = data.buttonText;
    titleHeadone.innerHTML = data.titleHead;
    titleHeadone.style.fontFamily = data.fontFamily;
    titleHeadTow.innerHTML = data.titleHeadP;
    titleHeadTow.style.fontFamily = data.fontFamily;
    cardOne.innerHTML = data.cardOneH1;
    cardOne.style.fontFamily = data.fontFamily;
    cardOne2.innerHTML = data.cardOneH3;
    cardOne2.style.fontFamily = data.fontFamily;
    cardTwo.innerHTML = data.cardTwoH1;
    cardTwo.style.fontFamily = data.fontFamily;
    cardTwo2.innerHTML = data.cardTwoH3;
    cardTwo2.style.fontFamily = data.fontFamily;
    cardThree.innerHTML = data.cardThreeH1;
    cardThree.style.fontFamily = data.fontFamily;
    cardThree2.innerHTML = data.cardThreeH3;
    cardThree2.style.fontFamily = data.fontFamily;
    pasteBtn.innerHTML = data.pasteText;
    if (window.innerWidth <= 768) {
        pUrl.innerHTML = `https://www.instagram.com/reel/`;
        pUrl2.innerHTML = `https://www.instagram.com/`;
        lun.innerHTML = `<i class="fa-solid fa-globe"></i> <i class="fa-solid fa-angle-down"></i>`;
        pasteBtn.innerHTML = `<i class="fa-solid fa-paste"></i>`;
    } else {

    }
    localStorage.setItem("lang", lang);
}
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    changeLanguage(savedLang);
});