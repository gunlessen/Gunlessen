/* =========================================================
   GUNLESSEN
   JavaScript اصلی اپلیکیشن
   موضوع: Ausbildung در آلمان
========================================================= */


/* =========================================================
   1. DATA
========================================================= */

const COURSES = {

    fachlernen: {

        title: "Fachlernen",

        lessons: [

            {
                title: "Elektrische Grundlagen",

                subtitle:
                    "Spannung, Strom, Widerstand und Leistung",

                body: [
                    "Die elektrischen Grundlagen gehören zu den wichtigsten Themen im technischen Ausbildungsalltag.",
                    "Wichtige Begriffe sind Spannung, Strom, Widerstand und Leistung. Diese Begriffe sollten unterschieden und in einfachen Aufgaben erkannt werden."
                ],

                example:
                    "Wenn du eine Fachaufgabe bekommst, prüfe zuerst, welcher Begriff beschrieben wird und welche Einheit dazugehört.",

                question:
                    "Welcher Begriff gehört zu den elektrischen Grundlagen?",

                options: [
                    "Spannung",
                    "Lebenslauf",
                    "Vorstellungsgespräch"
                ],

                answer: 0
            },


            {
                title: "Werkzeuge & Messgeräte",

                subtitle:
                    "Multimeter, Prüfgeräte und Handwerkzeuge",

                body: [
                    "Im Ausbildungsalltag werden verschiedene Werkzeuge und Messgeräte eingesetzt.",
                    "Wichtig ist, den Zweck eines Werkzeugs oder Messgeräts zu verstehen und den Arbeitsablauf sicher auszuführen."
                ],

                example:
                    "Vor einer Messung zuerst überlegen: Was soll gemessen werden und welches Messgerät ist dafür geeignet?",

                question:
                    "Welches Messgerät gehört zum Bereich Fachlernen?",

                options: [
                    "Multimeter",
                    "Lebenslauf",
                    "Bewerbungsfoto"
                ],

                answer: 0
            },


            {
                title: "Schaltungen verstehen",

                subtitle:
                    "Schaltpläne, Reihen- und Parallelschaltungen",

                body: [
                    "Schaltpläne stellen elektrische Zusammenhänge übersichtlich dar.",
                    "Im Einstieg ist es wichtig, Bauteile und deren Verbindungen erkennen und unterscheiden zu können."
                ],

                example:
                    "Beim Lesen eines Schaltplans zuerst die Bauteile betrachten und danach ihre Verbindungen verfolgen.",

                question:
                    "Wofür wird ein Schaltplan verwendet?",

                options: [
                    "Zur Darstellung einer elektrischen Schaltung",
                    "Zum Schreiben eines Lebenslaufs",
                    "Zum Telefonieren"
                ],

                answer: 0
            },


            {
                title: "Arbeitssicherheit",

                subtitle:
                    "Gefahren, Schutzmaßnahmen und sichere Arbeitsabläufe",

                body: [
                    "Sicherheit gehört zum Ausbildungsalltag und sollte vor einer praktischen Aufgabe bewusst geprüft werden.",
                    "Ein sinnvoller Ablauf ist: mögliche Gefahr erkennen, Schutzmaßnahme bestimmen und den Arbeitsablauf prüfen."
                ],

                example:
                    "Vor einer Aufgabe kurz prüfen: Was kann gefährlich werden und welche Schutzmaßnahme ist notwendig?",

                question:
                    "Was sollte bei einer praktischen Aufgabe immer berücksichtigt werden?",

                options: [
                    "Arbeitssicherheit",
                    "Nur Geschwindigkeit",
                    "Nur das Endergebnis"
                ],

                answer: 0
            }

        ]

    },


    deutsch: {

        title: "Arbeitsplatz Deutsch",

        lessons: [

            {
                title: "Mit Kollegen sprechen",

                subtitle:
                    "Fragen stellen, erklären und Hilfe holen",

                body: [
                    "Professionelle Kommunikation beginnt mit klaren und höflichen Fragen.",
                    "Wenn du einen Arbeitsauftrag nicht verstanden hast, solltest du gezielt nachfragen."
                ],

                example:
                    "Eine konkrete Frage ist besser als zu raten und dadurch einen Fehler zu machen.",

                question:
                    "Was ist bei einer unklaren Aufgabe sinnvoll?",

                options: [
                    "Gezielt nachfragen",
                    "Raten",
                    "Die Aufgabe ignorieren"
                ],

                answer: 0
            },


            {
                title: "Arbeitsaufträge verstehen",

                subtitle:
                    "Anweisungen, Aufgaben und Rückfragen",

                body: [
                    "Arbeitsaufträge sollten Schritt für Schritt gelesen und verstanden werden.",
                    "Wenn eine Anweisung unklar ist, ist eine konkrete Rückfrage ein wichtiger Teil professioneller Kommunikation."
                ],

                example:
                    "Frage zum Beispiel: Was soll ich als Nächstes machen?",

                question:
                    "Was hilft bei einem unklaren Arbeitsauftrag?",

                options: [
                    "Eine konkrete Rückfrage",
                    "Einfach raten",
                    "Nichts prüfen"
                ],

                answer: 0
            },


            {
                title: "Berufsschule",

                subtitle:
                    "Unterricht, Aufgaben und Fachsprache",

                body: [
                    "Auch in der Berufsschule ist es wichtig, Aufgabenstellungen genau zu lesen.",
                    "Fachbegriffe sollten regelmäßig wiederholt und in eigenen Worten erklärt werden."
                ],

                example:
                    "Schreibe nach einer Unterrichtseinheit drei wichtige Fachbegriffe auf und erkläre sie kurz.",

                question:
                    "Was sollte regelmäßig wiederholt werden?",

                options: [
                    "Fachbegriffe",
                    "Nur Pausen",
                    "Nur Überschriften"
                ],

                answer: 0
            },


            {
                title: "Sicherheitskommunikation",

                subtitle:
                    "Warnungen, Rückfragen und sichere Kommunikation",

                body: [
                    "Sicherheitsinformationen müssen klar verstanden werden.",
                    "Bei einer unklaren Sicherheitsanweisung solltest du sofort nachfragen."
                ],

                example:
                    "Wenn du eine Anweisung nicht verstanden hast, kannst du höflich um Wiederholung bitten.",

                question:
                    "Was solltest du bei einer unklaren Sicherheitsanweisung tun?",

                options: [
                    "Nachfragen",
                    "Raten",
                    "Ignorieren"
                ],

                answer: 0
            },


            {
                title: "Telefon & Kommunikation",

                subtitle:
                    "Professionell telefonieren",

                body: [
                    "Professionelle Telefonkommunikation sollte kurz, klar und höflich sein.",
                    "Ein guter Gesprächsbeginn enthält Begrüßung, Namen und das Anliegen."
                ],

                example:
                    "Beginne ein professionelles Gespräch mit einer Begrüßung und nenne anschließend dein Anliegen.",

                question:
                    "Wie sollte professionelle Kommunikation sein?",

                options: [
                    "Klar und höflich",
                    "Unklar",
                    "Ungeordnet"
                ],

                answer: 0
            }

        ]

    }

};


/* =========================================================
   2. EXTRA LESSONS
========================================================= */

const EXTRA_LESSONS = {

    unterricht: {

        category: "Berufsschule",

        title: "Unterricht verstehen",

        subtitle:
            "Aufgabenstellungen richtig lesen",

        body: [
            "In der Berufsschule ist es wichtig, Arbeitsaufträge genau zu lesen.",
            "Arbeitsverben wie erklären, vergleichen und begründen geben Hinweise darauf, welche Antwort erwartet wird."
        ],

        example:
            "Markiere zuerst das wichtigste Arbeitsverb und plane danach deine Antwort.",

        question:
            "Was hilft beim Verstehen einer Aufgabenstellung?",

        options: [
            "Das Arbeitsverb erkennen",
            "Nur das erste Wort lesen",
            "Die Aufgabe überspringen"
        ],

        answer: 0
    },


    aufgaben: {

        category: "Berufsschule",

        title: "Aufgaben bearbeiten",

        subtitle:
            "Von der Aufgabenstellung bis zur Kontrolle",

        body: [
            "Eine längere Aufgabe kann in mehrere kleine Schritte geteilt werden.",
            "Nach der Bearbeitung sollte kontrolliert werden, ob alle Punkte der Aufgabe beantwortet wurden."
        ],

        example:
            "Aufgabe lesen → Informationen markieren → Lösung bearbeiten → Ergebnis prüfen.",

        question:
            "Was gehört zum Abschluss einer Aufgabe?",

        options: [
            "Ergebnis prüfen",
            "Frage ignorieren",
            "Sofort abgeben"
        ],

        answer: 0
    },


    pruefung: {

        category: "Prüfungstraining",

        title: "Prüfungsfragen",

        subtitle:
            "Grundlagen sicher wiederholen",

        body: [
            "Gute Prüfungsvorbereitung beginnt mit den Grundlagen.",
            "Wichtige Begriffe sollten verstanden und anschließend mit kurzen Aufgaben trainiert werden."
        ],

        example:
            "Wiederhole einen Fachbegriff und löse danach eine passende Aufgabe.",

        question:
            "Was ist ein sinnvoller Start für die Prüfungsvorbereitung?",

        options: [
            "Grundlagen wiederholen",
            "Alles am Prüfungstag lernen",
            "Nur Überschriften lesen"
        ],

        answer: 0
    },


    sicherheit: {

        category: "Prüfungstraining",

        title: "Arbeitssicherheit",

        subtitle:
            "Gefahren und Schutzmaßnahmen",

        body: [
            "Sicherheit sollte nicht nur auswendig gelernt werden.",
            "Versuche, mögliche Gefahren in einer konkreten Situation zu erkennen und passende Schutzmaßnahmen zu nennen."
        ],

        example:
            "Gefahr erkennen → Schutzmaßnahme wählen → sicheren Ablauf planen.",

        question:
            "Welche Reihenfolge ist sinnvoll?",

        options: [
            "Gefahr → Schutzmaßnahme → Ablauf",
            "Ablauf → Gefahr ignorieren",
            "Nur Ergebnis"
        ],

        answer: 0
    },


    lebenslauf: {

        category: "Bewerbung",

        title: "Lebenslauf",

        subtitle:
            "Übersichtlich und passend für eine Ausbildung",

        body: [
            "Ein Lebenslauf sollte übersichtlich und leicht lesbar sein.",
            "Schule, Erfahrungen und relevante Kenntnisse sollten klar strukturiert dargestellt werden."
        ],

        example:
            "Ordne deine wichtigsten Stationen in einer klaren und nachvollziehbaren Reihenfolge.",

        question:
            "Was ist ein wichtiges Ziel eines Lebenslaufs?",

        options: [
            "Übersichtlichkeit",
            "Möglichst lange Texte",
            "Unklare Reihenfolge"
        ],

        answer: 0
    },


    bewerbung: {

        category: "Bewerbung",

        title: "Bewerbung schreiben",

        subtitle:
            "Motivation klar ausdrücken",

        body: [
            "Ein Anschreiben sollte zeigen, warum du dich für eine bestimmte Ausbildung interessierst.",
            "Formuliere deine Motivation klar und verbinde sie mit passenden Stärken."
        ],

        example:
            "Motivation + passende Stärke + Bezug zur Ausbildung in wenigen klaren Absätzen.",

        question:
            "Was sollte ein gutes Anschreiben zeigen?",

        options: [
            "Interesse und Motivation",
            "Nur Hobbys",
            "Nur einzelne Wörter"
        ],

        answer: 0
    },


    gespraech: {

        category: "Bewerbung",

        title: "Vorstellungsgespräch",

        subtitle:
            "Typische Fragen vorbereiten",

        body: [
            "Vorbereitung hilft dir, typische Fragen ruhig und verständlich zu beantworten.",
            "Gute Antworten sind ehrlich, konkret und können durch kurze Beispiele ergänzt werden."
        ],

        example:
            "Bereite Antworten auf Motivation, Stärken, Schule und Interesse an der Ausbildung vor.",

        question:
            "Was hilft bei einem Vorstellungsgespräch?",

        options: [
            "Vorbereitung",
            "Keine Vorbereitung",
            "Nur auswendig gelernte Antworten"
        ],

        answer: 0
    },


    vertrag: {

        category: "Bewerbung",

        title: "Arbeitsvertrag verstehen",

        subtitle:
            "Wichtige Punkte erkennen",

        body: [
            "Vor einer Unterschrift sollten wichtige Punkte eines Vertrags verstanden werden.",
            "Bei unklaren Begriffen sollte nachgefragt oder fachkundige Unterstützung gesucht werden."
        ],

        example:
            "Unklare Begriffe markieren und vor einer endgültigen Entscheidung klären.",

        question:
            "Was ist bei Unklarheiten sinnvoll?",

        options: [
            "Nachfragen und klären",
            "Ignorieren",
            "Raten"
        ],

        answer: 0
    },


    ausbildung: {

        category: "Deutschland & Ausbildung",

        title: "Ausbildung verstehen",

        subtitle:
            "Betrieb, Berufsschule und Lernweg",

        body: [
            "GUNLESSEN verbindet Fachlernen, Arbeitsplatz Deutsch, Berufsschule und Prüfungsvorbereitung.",
            "So entsteht ein zusammenhängender Lernweg für den Ausbildungsalltag."
        ],

        example:
            "Nach einer Fachlektion kannst du direkt passende Sprache oder Berufsschulaufgaben üben.",

        question:
            "Welche Bereiche verbindet GUNLESSEN?",

        options: [
            "Fachlernen und Berufsschule",
            "Nur Bewerbung",
            "Nur Lexikon"
        ],

        answer: 0
    },


    betrieb: {

        category: "Deutschland & Ausbildung",

        title: "Betrieb & Berufsschule",

        subtitle:
            "Unterschiedliche Lernsituationen verstehen",

        body: [
            "Betrieb und Berufsschule stellen unterschiedliche Anforderungen.",
            "Im Betrieb spielen Arbeitsabläufe und Kommunikation eine wichtige Rolle, während in der Schule Aufgaben und Fachsprache im Mittelpunkt stehen können."
        ],

        example:
            "Verbinde einen Fachbegriff aus dem Betrieb mit einer passenden Erklärung aus dem Unterricht.",

        question:
            "Warum werden Betrieb und Berufsschule gemeinsam trainiert?",

        options: [
            "Weil beide zum Ausbildungsweg gehören",
            "Weil nur die Schule wichtig ist",
            "Weil Fachwissen nicht benötigt wird"
        ],

        answer: 0
    },


    alltag: {

        category: "Deutschland & Ausbildung",

        title: "Arbeitsalltag",

        subtitle:
            "Kommunikation, Sicherheit und Zuverlässigkeit",

        body: [
            "Der Ausbildungsalltag verbindet Fachaufgaben mit Kommunikation und sicheren Arbeitsabläufen.",
            "Ein klarer Arbeitsprozess hilft dabei, Aufgaben bewusst und zuverlässig auszuführen."
        ],

        example:
            "Auftrag verstehen → Rückfragen klären → Sicherheit prüfen → Aufgabe durchführen.",

        question:
            "Was gehört zu einem guten Arbeitsablauf?",

        options: [
            "Auftrag verstehen und Sicherheit prüfen",
            "Auftrag ignorieren",
            "Ohne Rückfrage raten"
        ],

        answer: 0
    }

};


/* =========================================================
   3. LEXICON
========================================================= */

const LEXICON = [

    [
        "Spannung",
        "Elektrische Potentialdifferenz · Einheit Volt"
    ],

    [
        "Strom",
        "Elektrischer Strom · wichtiger Grundbegriff"
    ],

    [
        "Widerstand",
        "Maß für die Behinderung des Stromflusses"
    ],

    [
        "Leistung",
        "Elektrische Leistung · Einheit Watt"
    ],

    [
        "Schaltplan",
        "Grafische Darstellung einer elektrischen Schaltung"
    ],

    [
        "Multimeter",
        "Messgerät für verschiedene elektrische Größen"
    ],

    [
        "Prüfgerät",
        "Gerät zur Prüfung bestimmter Werte oder Eigenschaften"
    ],

    [
        "Arbeitsauftrag",
        "Aufgabe oder Anweisung im Arbeitsalltag"
    ],

    [
        "Schutzmaßnahme",
        "Maßnahme zur Verringerung eines Sicherheitsrisikos"
    ],

    [
        "Berufsschule",
        "Schulischer Teil der beruflichen Ausbildung"
    ]

];


/* =========================================================
   4. STATE
========================================================= */

const PROGRESS_KEY =
    "gunlessen_progress_v1";

const PROFILE_KEY =
    "gunlessen_profile_v1";

const ACTIVITY_KEY =
    "gunlessen_activity_v1";


let progress =
    loadStorage(
        PROGRESS_KEY,
        {}
    );


let profile =
    loadStorage(
        PROFILE_KEY,
        {}
    );


let currentCourse =
    null;


let currentLessons =
    [];


let currentLessonIndex =
    0;


let quizAnswered =
    false;


/* =========================================================
   5. STORAGE
========================================================= */

function loadStorage(
    key,
    fallback
) {

    try {

        const saved =
            localStorage.getItem(
                key
            );

        return saved
            ? JSON.parse(saved)
            : fallback;

    } catch {

        return fallback;

    }

}


function saveProgress() {

    localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(progress)
    );

}


function saveProfile() {

    localStorage.setItem(
        PROFILE_KEY,
        JSON.stringify(profile)
    );

}


/* =========================================================
   6. TOAST
========================================================= */

let toastTimer;


function showToast(
    message
) {

    let toast =
        document.getElementById(
            "gunlessenToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "gunlessenToast";


        toast.style.position =
            "fixed";

        toast.style.right =
            "22px";

        toast.style.bottom =
            "22px";

        toast.style.zIndex =
            "9999";

        toast.style.background =
            "#172033";

        toast.style.color =
            "#ffffff";

        toast.style.padding =
            "12px 16px";

        toast.style.borderRadius =
            "11px";

        toast.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.18)";

        toast.style.fontSize =
            "14px";

        toast.style.transition =
            ".25s";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.style.opacity =
        "1";


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.style.opacity =
                    "0";

            },
            2200
        );

}


/* =========================================================
   7. NAVIGATION
========================================================= */

const VIEW_TITLES = {

    dashboard: [
        "Guten Tag 👋",
        "Bereit für deine nächste Lernsession?"
    ],

    ausbildung: [
        "Mein Ausbildungsweg",
        "Dein persönlicher Weg durch die Ausbildung."
    ],

    fachlernen: [
        "Fachlernen",
        "Fachwissen für deinen Ausbildungsberuf."
    ],

    deutsch: [
        "Arbeitsplatz Deutsch",
        "Deutsch für deinen Ausbildungsalltag."
    ],

    hoeren: [
        "Hören & Sprechen",
        "Deutsch für typische Situationen im Betrieb."
    ],

    berufsschule: [
        "Berufsschule",
        "Unterricht, Aufgaben und Fachsprache."
    ],

    pruefung: [
        "Prüfungstraining",
        "Bereite dich auf Prüfungsaufgaben vor."
    ],

    bewerbung: [
        "Bewerbung",
        "Lebenslauf und Vorstellungsgespräch."
    ],

    deutschland: [
        "Deutschland & Ausbildung",
        "Orientierung rund um Ausbildung und Arbeitsalltag."
    ],

    lexikon: [
        "Fachlexikon",
        "Wichtige Fachbegriffe aus dem Ausbildungsalltag."
    ],

    profil: [
        "Mein Profil",
        "Deine persönlichen Lerninformationen."
    ]

};


function showView(
    viewId,
    clickedButton = null
) {

    document
        .querySelectorAll(
            ".view"
        )
        .forEach(
            view =>
                view.classList.remove(
                    "active"
                )
        );


    const view =
        document.getElementById(
            viewId
        );


    if (!view) {

        return;

    }


    view.classList.add(
        "active"
    );


    document
        .querySelectorAll(
            ".nav button"
        )
        .forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


    if (clickedButton) {

        clickedButton.classList.add(
            "active"
        );

    } else {

        const navigation =
            document.querySelector(
                `.nav button[onclick*="'${viewId}'"]`
            );


        if (navigation) {

            navigation.classList.add(
                "active"
            );

        }

    }


    const title =
        VIEW_TITLES[
            viewId
        ];


    if (title) {

        document.getElementById(
            "pageTitle"
        ).textContent =
            title[0];


        document.getElementById(
            "pageSubtitle"
        ).textContent =
            title[1];

    }


    const sidebar =
        document.getElementById(
            "sidebar"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   8. SIDEBAR
========================================================= */

function toggleSidebar() {

    document
        .getElementById(
            "sidebar"
        )
        .classList.toggle(
            "open"
        );

}


/* =========================================================
   9. LESSONS
========================================================= */

function openLesson(
    courseId,
    lessonIndex
) {

    if (
        !COURSES[
            courseId
        ]
    ) {

        return;

    }


    currentCourse =
        courseId;


    currentLessons =
        COURSES[
            courseId
        ].lessons;


    currentLessonIndex =
        lessonIndex;


    renderLesson();

}


function openSpecialLesson(
    lesson
) {

    if (
        !EXTRA_LESSONS[
            lesson
        ]
    ) {

        return;

    }


    currentCourse =
        "extra";


    currentLessons =
        [
            EXTRA_LESSONS[
                lesson
            ]
        ];


    currentLessonIndex =
        0;


    renderLesson();

}


function renderLesson() {

    const lesson =
        currentLessons[
            currentLessonIndex
        ];


    if (!lesson) {

        return;

    }


    quizAnswered =
        false;


    document.getElementById(
        "lessonTitle"
    ).textContent =
        lesson.title;


    document.getElementById(
        "lessonSubtitle"
    ).textContent =
        lesson.subtitle;


    document.getElementById(
        "lessonText"
    ).innerHTML =
        lesson.body
            .map(
                paragraph =>
                    `<p>${paragraph}</p>`
            )
            .join("");


    document.getElementById(
        "lessonExample"
    ).textContent =
        lesson.example;


    document.getElementById(
        "quizQuestion"
    ).textContent =
        lesson.question;


    const options =
        document.getElementById(
            "quizOptions"
        );


    options.innerHTML =
        "";


    lesson.options.forEach(
        (
            option,
            index
        ) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () =>
                    answerQuiz(
                        index,
                        button
                    )
            );


            options.appendChild(
                button
            );

        }
    );


    document.getElementById(
        "quizFeedback"
    ).textContent =
        "";


    document.getElementById(
        "prevLessonButton"
    ).disabled =
        currentLessonIndex === 0;


    document.getElementById(
        "nextLessonButton"
    ).disabled =
        currentLessonIndex ===
        currentLessons.length - 1;


    document.getElementById(
        "completeButton"
    ).textContent =
        isLessonCompleted()
            ? "Bereits abgeschlossen ✓"
            : "Lektion abschließen ✓";


    document
        .getElementById(
            "lessonModal"
        )
        .classList.add(
            "open"
        );

}


/* =========================================================
   10. QUIZ
========================================================= */

function answerQuiz(
    selectedIndex,
    clickedButton
) {

    if (quizAnswered) {

        return;

    }


    quizAnswered =
        true;


    const lesson =
        currentLessons[
            currentLessonIndex
        ];


    const options =
        document
            .querySelectorAll(
                "#quizOptions button"
            );


    options.forEach(
        button =>
            button.disabled =
                true
    );


    if (
        options[
            lesson.answer
        ]
    ) {

        options[
            lesson.answer
        ].style.borderColor =
            "#18a66a";

    }


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    if (
        selectedIndex ===
        lesson.answer
    ) {

        clickedButton.style.borderColor =
            "#18a66a";


        feedback.textContent =
            "Richtig! Sehr gut. ✓";


        feedback.style.color =
            "#18a66a";

    } else {

        clickedButton.style.borderColor =
            "#dc4c64";


        feedback.textContent =
            "Nicht ganz. Die richtige Antwort wurde markiert.";


        feedback.style.color =
            "#dc4c64";

    }

}


/* =========================================================
   11. COMPLETE LESSON
========================================================= */

function completeLesson() {

    if (
        currentCourse === "extra"
    ) {

        showToast(
            "Lektion abgeschlossen ✓"
        );

        closeLesson();

        return;

    }


    if (
        !currentCourse
    ) {

        return;

    }


    const key =
        `${currentCourse}-${currentLessonIndex}`;


    progress[
        key
    ] = true;


    saveProgress();

    touchActivity();


    updateDashboard();


    renderCourseButtons();


    showToast(
        "Lektion gespeichert ✓"
    );


    if (
        currentLessonIndex <
        currentLessons.length - 1
    ) {

        currentLessonIndex += 1;


        setTimeout(
            renderLesson,
            250
        );

    } else {

        renderLesson();


        showToast(
            "Bereich abgeschlossen 🎉"
        );

    }

}


function isLessonCompleted() {

    if (
        currentCourse === "extra"
    ) {

        return false;

    }


    return Boolean(
        progress[
            `${currentCourse}-${currentLessonIndex}`
        ]
    );

}


/* =========================================================
   12. PREVIOUS / NEXT
========================================================= */

function previousLesson() {

    if (
        currentLessonIndex <= 0
    ) {

        return;

    }


    currentLessonIndex -= 1;

    renderLesson();

}


function nextLesson() {

    if (
        currentLessonIndex >=
        currentLessons.length - 1
    ) {

        return;

    }


    currentLessonIndex += 1;

    renderLesson();

}


/* =========================================================
   13. CLOSE LESSON
========================================================= */

function closeLesson() {

    document
        .getElementById(
            "lessonModal"
        )
        .classList.remove(
            "open"
        );

}


/* =========================================================
   14. COURSE PROGRESS
========================================================= */

function getCourseProgress(
    courseId
) {

    const lessons =
        COURSES[
            courseId
        ].lessons;


    const completed =
        lessons.filter(
            (_, index) =>
                progress[
                    `${courseId}-${index}`
                ]
        ).length;


    return {

        completed,

        total:
            lessons.length,

        percent:
            Math.round(
                completed /
                Math.max(
                    lessons.length,
                    1
                ) *
                100
            )

    };

}


function updateDashboard() {

    const fach =
        getCourseProgress(
            "fachlernen"
        );


    const deutsch =
        getCourseProgress(
            "deutsch"
        );


    const allLessonsCount =
        Object.values(
            COURSES
        )
        .reduce(
            (
                total,
                course
            ) =>
                total +
                course.lessons.length,
            0
        );


    const completed =
        Object.keys(
            progress
        ).filter(
            key =>
                progress[
                    key
                ]
        ).length;


    const totalPercent =
        Math.round(
            completed /
            Math.max(
                allLessonsCount,
                1
            ) *
            100
        );


    const progressValue =
        document.getElementById(
            "progressValue"
        );


    const completedLessons =
        document.getElementById(
            "completedLessons"
        );


    const progressCircle =
        document.getElementById(
            "progressCircle"
        );


    const fachProgress =
        document.getElementById(
            "fachProgress"
        );


    const fachMeta =
        document.getElementById(
            "fachMeta"
        );


    const deutschProgress =
        document.getElementById(
            "deutschProgress"
        );


    const deutschMeta =
        document.getElementById(
            "deutschMeta"
        );


    if (progressValue) {

        progressValue.textContent =
            `${totalPercent}%`;

    }


    if (completedLessons) {

        completedLessons.textContent =
            completed;

    }


    if (progressCircle) {

        progressCircle.textContent =
            `${totalPercent}%`;


        progressCircle.style.background =
            `
            radial-gradient(
                circle at center,
                #172a68 56%,
                transparent 57%
            ),
            conic-gradient(
                #fff 0 ${totalPercent}%,
                rgba(255,255,255,.2)
                ${totalPercent}% 100%
            )
            `;

    }


    if (fachProgress) {

        fachProgress.style.width =
            `${fach.percent}%`;

    }


    if (fachMeta) {

        fachMeta.textContent =
            `${fach.completed} von ${fach.total} Lektionen`;

    }


    if (deutschProgress) {

        deutschProgress.style.width =
            `${deutsch.percent}%`;

    }


    if (deutschMeta) {

        deutschMeta.textContent =
            `${deutsch.completed} von ${deutsch.total} Lektionen`;

    }

}


/* =========================================================
   15. COURSE BUTTON LABELS
========================================================= */

function renderCourseButtons() {

    document
        .querySelectorAll(
            "[data-course-button]"
        )
        .forEach(
            button => {

                const [
                    courseId,
                    index
                ] =
                    button
                        .dataset
                        .courseButton
                        .split("|");


                const isDone =
                    progress[
                        `${courseId}-${index}`
                    ];


                button.textContent =
                    isDone
                        ? "Wiederholen"
                        : "Lernen";

            }
        );

}


/* =========================================================
   16. LEXICON
========================================================= */

function renderLexicon(
    searchText = ""
) {

    const container =
        document.getElementById(
            "lexiconList"
        );


    if (!container) {

        return;

    }


    const search =
        searchText
            .trim()
            .toLowerCase();


    const filtered =
        LEXICON.filter(
            item =>
                (
                    item[0] +
                    " " +
                    item[1]
                )
                .toLowerCase()
                .includes(
                    search
                )
        );


    container.innerHTML =
        "";


    filtered.forEach(
        item => {

            const module =
                document.createElement(
                    "div"
                );


            module.className =
                "module";


            module.innerHTML = `

                <div>

                    <strong>
                        ${item[0]}
                    </strong>

                    <small>
                        ${item[1]}
                    </small>

                </div>

                <span>
                    DE → FA
                </span>

            `;


            container.appendChild(
                module
            );

        }
    );


    if (
        filtered.length === 0
    ) {

        container.innerHTML = `

            <div class="module">

                <strong>
                    Kein Fachbegriff gefunden.
                </strong>

            </div>

        `;

    }

}


/* =========================================================
   17. PROFILE
========================================================= */

function loadProfile() {

    const name =
        profile.name ||
        "Lernende/r";


    const trade =
        profile.trade ||
        "Ausbildungsberuf";


    const userName =
        document.getElementById(
            "userName"
        );


    const userTrade =
        document.getElementById(
            "userTrade"
        );


    const userAvatar =
        document.getElementById(
            "userAvatar"
        );


    const profileNameText =
        document.getElementById(
            "profileNameText"
        );


    const profileTradeText =
        document.getElementById(
            "profileTradeText"
        );


    const profileProgressText =
        document.getElementById(
            "profileProgressText"
        );


    if (userName) {

        userName.textContent =
            name;

    }


    if (userTrade) {

        userTrade.textContent =
            trade;

    }


    if (userAvatar) {

        userAvatar.textContent =
            name
                .trim()
                .charAt(0)
                .toUpperCase() ||
            "G";

    }


    if (profileNameText) {

        profileNameText.textContent =
            name;

    }


    if (profileTradeText) {

        profileTradeText.textContent =
            trade;

    }


    if (profileProgressText) {

        profileProgressText.textContent =
            `${calculateOverallProgress()}%`;

    }

}


function saveUserProfile() {

    const name =
        document
            .getElementById(
                "profileNameInput"
            )
            ?.value
            .trim();


    const trade =
        document
            .getElementById(
                "profileTradeInput"
            )
            ?.value
            .trim();


    profile = {

        name:
            name ||
            "Lernende/r",

        trade:
            trade ||
            "Ausbildungsberuf"

    };


    saveProfile();

    loadProfile();

    showToast(
        "Profil gespeichert ✓"
    );

}


/* =========================================================
   18. OVERALL PROGRESS
========================================================= */

function calculateOverallProgress() {

    const total =
        Object.values(
            COURSES
        )
        .reduce(
            (
                sum,
                course
            ) =>
                sum +
                course.lessons.length,
            0
        );


    const completed =
        Object.keys(
            progress
        ).filter(
            key =>
                progress[
                    key
                ]
        ).length;


    return Math.round(
        completed /
        Math.max(
            total,
            1
        ) *
        100
    );

}


/* =========================================================
   19. ACTIVITY / STREAK
========================================================= */

function touchActivity() {

    const today =
        new Date()
            .toISOString()
            .slice(
                0,
                10
            );


    let activities =
        loadStorage(
            ACTIVITY_KEY,
            []
        );


    if (
        !activities.includes(
            today
        )
    ) {

        activities.push(
            today
        );

    }


    activities =
        activities.slice(
            -60
        );


    localStorage.setItem(
        ACTIVITY_KEY,
        JSON.stringify(
            activities
        )
    );

}


/* =========================================================
   20. TEXT TO SPEECH
========================================================= */

function speakGerman(
    text
) {

    if (
        !(
            "speechSynthesis"
            in window
        )
    ) {

        showToast(
            "Sprachfunktion wird von diesem Browser nicht unterstützt."
        );

        return;

    }


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang =
        "de-DE";


    speech.rate =
        0.95;


    speech.pitch =
        1;


    speechSynthesis.cancel();

    speechSynthesis.speak(
        speech
    );

}


/* =========================================================
   21. PRO MESSAGE
========================================================= */

function showProMessage() {

    showToast(
        "GUNLESSEN Pro wird in der nächsten Produktphase aktiviert."
    );

}


/* =========================================================
   22. RESET
========================================================= */

function resetProgress() {

    const confirmReset =
        window.confirm(
            "Möchtest du deinen gesamten Lernfortschritt löschen?"
        );


    if (!confirmReset) {

        return;

    }


    progress =
        {};


    localStorage.removeItem(
        PROGRESS_KEY
    );


    localStorage.removeItem(
        ACTIVITY_KEY
    );


    updateDashboard();

    renderCourseButtons();

    loadProfile();

    showToast(
        "Lernfortschritt gelöscht."
    );

}


/* =========================================================
   23. MOBILE
========================================================= */

function setupMobileSidebar() {

    const buttons =
        document.querySelectorAll(
            ".nav button"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .getElementById(
                            "sidebar"
                        )
                        .classList
                        .remove(
                            "open"
                        );

                }
            );

        }
    );

}


/* =========================================================
   24. CLICK DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const courseButton =
            event.target.closest(
                "[data-course-index]"
            );


        if (courseButton) {

            const [
                courseId,
                index
            ] =
                courseButton
                    .dataset
                    .courseIndex
                    .split("|");


            openLesson(
                courseId,
                Number(index)
            );


            return;

        }


        const extraLesson =
            event.target.closest(
                "[data-extra-lesson]"
            );


        if (extraLesson) {

            openSpecialLesson(
                extraLesson
                    .dataset
                    .extraLesson
            );


            return;

        }

    }
);


/* =========================================================
   25. INITIALIZE
========================================================= */

function initializeApp() {

    loadProfile();

    updateDashboard();

    renderCourseButtons();

    renderLexicon();

    setupMobileSidebar();

}


/* =========================================================
   26. BUTTON EVENT BINDINGS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const saveProfileButton =
            document.getElementById(
                "saveProfile"
            );


        if (saveProfileButton) {

            saveProfileButton.addEventListener(
                "click",
                saveUserProfile
            );

        }


        const resetButton =
            document.getElementById(
                "resetBtn"
            );


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                resetProgress
            );

        }


        const lexiconSearch =
            document.getElementById(
                "lexiconSearch"
            );


        if (lexiconSearch) {

            lexiconSearch.addEventListener(
                "input",
                event =>
                    renderLexicon(
                        event.target.value
                    )
            );

        }


        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        if (mobileMenu) {

            mobileMenu.addEventListener(
                "click",
                toggleSidebar
            );

        }


        const completeButton =
            document.getElementById(
                "completeButton"
            );


        if (completeButton) {

            completeButton.addEventListener(
                "click",
                completeLesson
            );

        }


        const prevButton =
            document.getElementById(
                "prevLessonButton"
            );


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                previousLesson
            );

        }


        const nextButton =
            document.getElementById(
                "nextLessonButton"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextLesson
            );

        }


        const overlay =
            document.getElementById(
                "lessonModal"
            );


        if (overlay) {

            overlay.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        overlay
                    ) {

                        closeLesson();

                    }

                }
            );

        }


        initializeApp();

    }
);