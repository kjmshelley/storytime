const languageDialectsOptions = document.querySelector(".language-dialects-options");
const languageDialectsSelected = document.querySelector("#language-dialects-selected");


languageDialectsOptions.addEventListener("change", evt => {
    console.log(evt.target.value);
});
