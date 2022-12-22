slides1 = document.querySelectorAll('[data-js="carousel__item1"]');
nextButton1 = document.querySelector("[data-js='carousel__button1--next']");
prevButton1 = document.querySelector("[data-js='carousel__button1--prev']");

slides2 = document.querySelectorAll('[data-js="carousel__item2"]');
nextButton2 = document.querySelector("[data-js='carousel__button2--next']");
prevButton2 = document.querySelector("[data-js='carousel__button2--prev']");

slides3 = document.querySelectorAll('[data-js="carousel__item3"]');
nextButton3 = document.querySelector("[data-js='carousel__button3--next']");
prevButton3 = document.querySelector("[data-js='carousel__button3--prev']");

window.onload=function(){
    currentSlideIndex = 0;
    nextButton1.addEventListener("click", next1);
    prevButton1.addEventListener("click", prev1);

    nextButton2.addEventListener("click", next2);
    prevButton2.addEventListener("click", prev2);

    nextButton3.addEventListener("click", next3);
    prevButton3.addEventListener("click", prev3);
   
}

function prev1(){
    if(currentSlideIndex === 0){
        currentSlideIndex = slides1.length - 1;
    }else{
        currentSlideIndex--;
    }
        

    slides1.forEach(slide =>{
        slide.classList.remove('carousel__item1--visible');
    });

    slides1[currentSlideIndex].classList.add('carousel__item1--visible');   
};
function next1(){
    if(currentSlideIndex === slides1.length - 1){
        currentSlideIndex = 0;
    }else{
        currentSlideIndex++;
    }
        

    slides1.forEach(slide =>{
        slide.classList.remove('carousel__item1--visible');
    });

    slides1[currentSlideIndex].classList.add('carousel__item1--visible');   
};

function prev2(){
    if(currentSlideIndex === 0){
        currentSlideIndex = slides2.length - 1;
    }else{
        currentSlideIndex--;
    }
        

    slides2.forEach(slide =>{
        slide.classList.remove('carousel__item2--visible');
    });

    slides2[currentSlideIndex].classList.add('carousel__item2--visible');   
};
function next2(){
    if(currentSlideIndex === slides2.length - 1){
        currentSlideIndex = 0;
    }else{
        currentSlideIndex++;
    }
        

    slides2.forEach(slide =>{
        slide.classList.remove('carousel__item2--visible');
    });

    slides2[currentSlideIndex].classList.add('carousel__item2--visible');   
};


function prev3(){
    if(currentSlideIndex === 0){
        currentSlideIndex = slides3.length - 1;
    }else{
        currentSlideIndex--;
    }
        

    slides3.forEach(slide =>{
        slide.classList.remove('carousel__item3--visible');
    });

    slides3[currentSlideIndex].classList.add('carousel__item3--visible');   
};
function next3(){
    if(currentSlideIndex === slides3.length - 1){
        currentSlideIndex = 0;
    }else{
        currentSlideIndex++;
    }
        

    slides3.forEach(slide =>{
        slide.classList.remove('carousel__item3--visible');
    });

    slides3[currentSlideIndex].classList.add('carousel__item3--visible');   
};