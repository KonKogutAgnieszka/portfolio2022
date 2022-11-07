const data = {
  pl: {
    //nav section //
    text_nav_start: "start",
    text_nav_about: "o mnie",
    text_nav_tech: "technologie",
    text_nav_works: "prace",
    // intro section //
    text_introduction__title:
      "Cześć, jestem <strong>Agnieszka Koń-Kogut<strong>",
    text_introduction__subtitle: "jestem front-end developerką",
    // tech section //
    text_technologies__title: "technologie z których korzystam",
    text_technologies__mywork: "moje prace",
    // about section //
    text_about__title: "Kim jestem?",
    text_about__subtitle: "front-end samouk ;)",
    text_about__content:
      "Tworzeniem stron zainteresowałam się daaawno temu tworząc pierwszego bloga. W trakcie studiów zdobyłam podstawową wiedzę w zakresie programowania i ogólne wykształcenie techniczne. Aby połączyć moją wiedzę plastyka i inżyniera, po studiach postanowiłam rozwijać się we Front-End. Niestety pandemia uniemożliwiła mi odbycie pierwszego stażu, dlatego uczę się sama. Swoją wiedzę czerpię zarówno z kursów online jak i książek. Aktualnie poszerzam swoją znajomość React.",
    text_about__education:
      "Wykształcenie:<br />średnie - plastyk - specjalność formy użytkowe<br />wyższe - mgr inż - specjalność informartyka stosowana w technice<br />",
    // work section //
    text_portfolio__title: "projekty",
    text_portfolio__subtitle: "moje prace",
    text_portfolio__1__about:
      "gra podsumowująca pierwszy etap nauki javascript",
    text_portfolio__2__about: "prosta gra z wykorzystaniem OOP",
    text_portfolio__3__about: "strona firmy ANKON",
    text_portfolio__4__about: "strona artysty freelancera",
  },
  eng: {
    //nav section //
    text_nav_start: "start",
    text_nav_about: "about me",
    text_nav_tech: "toolbox",
    text_nav_works: "works",
    // intro section //
    text_introduction__title: "Hi! I'm <strong>Agnieszka Koń-Kogut</strong>",
    text_introduction__subtitle: "I'm front-end developer",
    // tech section //
    text_technologies__title: "toolbox",
    text_technologies__mywork: "my work",
    // about section //
    text_about__title: "Who I am",
    text_about__subtitle: "self-taught front-end;)",
    text_about__content:
      "I became interested in creating websites a long time ago by creating my first blog. During my studies I gained basic programming knowledge and general technical education. In order to combine my knowledge of art and engineering, after graduation I decided to focus on improving my Front-End skills. Unfortunately, the pandemic prevented me from completing my first internship. I learn from both online courses and books. I am currently learning React.",
    text_about__education:
      "Education:<br />secondary education - art shool - utility forms <br />higher education - mgr inż - computer science applied in technology <br />",
    // work section //
    text_portfolio__title: "projects",
    text_portfolio__subtitle: "my works",
    text_portfolio__1__about: "first game in javascript",
    text_portfolio__2__about: "simple OOP game",
    text_portfolio__3__about: "ANKON website [PL]",
    text_portfolio__4__about: "freelancer artist website",
  },
};

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const langPL = document.querySelector(".lang_pl");
const langENG = document.querySelector(".lang_eng");
const textElements = document.querySelectorAll("[class*=text]");
let language = "pl";

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

function languageChange(language) {
  textElements.forEach((element) => {
    let text = element.classList[0];
    element.innerHTML = data[language][text];
  });
}

langENG.addEventListener("click", () => {
  langPL.classList.toggle("active_lang");
  langENG.classList.toggle("active_lang");
  language = "eng";
  languageChange(language);
});

langPL.addEventListener("click", () => {
  langPL.classList.toggle("active_lang");
  langENG.classList.toggle("active_lang");
  language = "pl";
  languageChange(language);
});
