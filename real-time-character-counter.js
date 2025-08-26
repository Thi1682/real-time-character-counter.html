const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainCounEl = document.getElementById("remaining-counter");
updateCounter();

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
    saveData()
    saveData()
})
function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainCounEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length ;
    saveData()
    saveData()
}
function saveData(){
    localStorage("data", textareaEl.innerText);
}
function saveData(){
    textareaEl.innerHTML = localStorage("data");
}