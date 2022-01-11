let name = document.getElementById('name');
let excel_name = document.getElementById('excel_name');

excel_name.addEventListener('keyup', fun)
function fun(e) {
    e.preventDefault
    name.innerHTML = excel_name.value
}




let tds = document.querySelectorAll("td")

for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function fun(){
        let input = document.createElement("input");
        input.value = this.innerHTML;
        this.innerHTML = "";
        this.appendChild(input);

        let element = this
        input.addEventListener("blur", function(){
            element.innerHTML = this.value;
            element.addEventListener("click", fun)
        });

        this.removeEventListener("click", fun);
    });
    
}