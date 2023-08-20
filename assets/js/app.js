const languageDialectsOptions = document.querySelector(".language-dialects-options");
const languageDialectsSelected = document.querySelector("#language-dialects-selected");
//https://www.behance.net/search/projects/?search=NETFLIX+UI
const languages = [
    { name: "Mandarin", dialects: ["Beijing", "Guangzhou", "Nanjing", "Shanghai", "Sichuan", "Singapore", "Taiwan"] },
    { name: "Cantonese", dialects: [] },
    { name: "Japanese", dialects: ["Tokyo", "Osaka"] },
    { name: "Korean", dialects: [] },
    { name: "Spanish", dialects: ["Argentina", "Costa Rica", "Cuba", "Dominican Republic", "El Salvador", "Mexico", "Peru", "Spain" ] },
    { name: "Portuguese", dialects: ["Portugal", "Brazil", ] },
    { name: "Cambodia", dialects: [] },
    { name: "Indonesia", dialects: ["Jakarta", "Kalimantan", "Sulawesi" ] },
    { name: "Malay", dialects: [] },
    { name: "Tagalog", dialects: [] },
    { name: "Thai", dialects: [] },
    { name: "Vietnam", dialects: ["Phan Thiet", "Ho Chi"] },
];
languageDialectsOptions.addEventListener("change", evt => {
    const lang = evt.target.value;
    const language = languages.filter(l => l.name === lang);
    console.log(language);
    if (language.length === 0) {
        languageDialectsSelected.innerHTML = "";
        language.at(0).dialects.map(l => {
            const li = document.createElement("li");
            li.innerText = l;
            languageDialectsSelected.append(li);
        });
    }
});
