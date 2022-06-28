var questions = document.querySelectorAll(".question");
var boxQ = document.getElementById("faq");
console.log(questions);

for (let i = 0; i < questions.length; i++) {
    boxQ.children[i].addEventListener("click", function () {
            

        if (questions[i].children[1].classList.contains("hide")) {

            questions[i].children[1].classList.remove("hide");
            questions[i].children[1].classList.remove("upAnimation");
            questions[i].children[1].classList.add("downAnimation");
            

        } else {
            
           
            questions[i].children[1].classList.add("upAnimation");
            questions[i].children[1].classList.add("hide");
            questions[i].children[1].classList.remove("downAnimation");
        }
        
    })
    console.log(i)
}

