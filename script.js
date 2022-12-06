/*aboutMe*/
  const aboutButton = document.querySelector(".aboutButton")
  const aboutMe   = document.querySelector(".aboutMe")
  const closeA  = document.querySelector(".a")

aboutButton.addEventListener("click", ()=> {
  aboutMe.classList.add("show")
})
closeA.addEventListener("click", ()=> {
  aboutMe.classList.remove("show")
  
})
/*Works*/
  const workButton = document.querySelector(".workButton")
  const works = document.querySelector(".works")
  const closeB  = document.querySelector(".b")

workButton.addEventListener("click", ()=> {
  works.classList.add("show")
})
closeB.addEventListener("click", ()=> {
  works.classList.remove("show")
})
/*coverLetter*/
  const letterButton = document.querySelector(".letterButton")
  const coverLetter  = document.querySelector(".coverLetter")
  const closeC       = document.querySelector(".c")

letterButton.addEventListener("click", ()=> {
  coverLetter.classList.add("show")
})
closeC.addEventListener("click", ()=> {
  coverLetter.classList.remove("show")
})
/*contactMe*/
  const contactButton = document.querySelector(".contactButton")
  const contactMe = document.querySelector(".contactMe")
  const closeD = document.querySelector(".d")
contactButton.addEventListener("click", ()=> {
  contactMe.classList.add("show")
})
closeD.addEventListener("click", ()=> {
  contactMe.classList.remove("show")
})

/*Carrousel Start*/
const carrouselHolder = document.querySelector(".carrouselHolder")
const imageButton = document.querySelectorAll(".imgBttn")

imageButton.forEach( ( cadaPunto, i)=> {
  imageButton[i].addEventListener("click", ()=> {

    let position = i
    let operation = position * -25

    carrouselHolder.style.transform = `translateX(${ operation }%)`

    imageButton.forEach( ( cadaPunto, i )=> {
      imageButton[i].classList.remove("active")
    })
    imageButton[i].classList.add("active")
  })  
})
/*Carrousel End*/
/*Darkmode start*/
  const dayButton = document.querySelector(".day");
  const nightButton = document.querySelector(".night");

dayButton.addEventListener("click", ()=> {
  nightButton.classList.add("actualMode");
  dayButton.classList.remove("actualMode");
  document.documentElement.style.setProperty("--url-background-regular", "url(https://i.ibb.co/x63P6W0/Dark-Mode2.jpg) no-repeat center");
  document.documentElement.style.setProperty("--url-background-small", "url(https://i.ibb.co/sy8PtdQ/Dark-Mode-Small.jpg) no-repeat center");
  document.documentElement.style.setProperty("--blue-shadow-color", "#5d9cff")
  document.documentElement.style.setProperty("--blue-border-color", "#5d9cff")
  document.documentElement.style.setProperty("--blue-text-color", "#5d9cff")
  document.documentElement.style.setProperty("--black-color", "#f8f6f0")
})
nightButton.addEventListener("click", ()=> {
  nightButton.classList.remove("actualMode");
  dayButton.classList.add("actualMode");
  document.documentElement.style.setProperty("--url-background-regular", "url(https://i.ibb.co/wR1gp1X/IMG-20221105-225056-374.jpg) no-repeat center");
  document.documentElement.style.setProperty("--url-background-small", "url(https://i.ibb.co/rbQVFTS/Regular-Mode-Small.jpg) no-repeat center");
    document.documentElement.style.setProperty("--black-color", "#151922");
  document.documentElement.style.setProperty("--blue-text-color", "#123e82");
  document.documentElement.style.setProperty("--blue-border-color", "#131047");
  document.documentElement.style.setProperty("--blue-shadow-color", "#032760");

})

