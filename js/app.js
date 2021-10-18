const DataInput = document.getElementById('Data');
const btn = document.querySelector(".inicio");



btn.addEventListener("click", salvarData)


function salvarData(e) {
    if (typeof(Storage) !== "undefined") {


        localStorage.setItem("data", DataInput.value);

    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}