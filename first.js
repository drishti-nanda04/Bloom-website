const slide1 = document.querySelectorAll(".slider1")
const slide2 = document.querySelectorAll(".slider2")
const slide3 = document.querySelectorAll(".slider3")
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
slide1.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
slide2.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
slide3.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext1 = () => {
    if(counter1 == 2){
        counter1 = 0;
    }
    else{
        counter1++;
    }
    slideImage();
}
const goNext2 = () => {
    if(counter2 == 2){
        counter2 = 0;
    }
    else{
        counter2++;
    }
    slideImage();
}
const goNext3 = () => {
    if(counter3 == 2){
        counter3 = 0;
    }
    else{
        counter3++;
    }
    slideImage();
}
const slideImage = () => {
    slide1.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter1 * 100}%)`
        }
    )
    slide2.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter2 * 100}%)`
        }
    )
    slide3.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter3 * 100}%)`
        }
    )
}
