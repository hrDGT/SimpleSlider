const controlLeft = document.querySelector('.slider__left__control')
const controlRight = document.querySelector('.slider__right__control')
const title = document.querySelector('.slide__title')
const slideElement = document.querySelector('.slider__slide')
const sliderProgress = document.querySelector('.slider__progress')

const slides = [
    { title: 'Slide 1', img: 'test.png' },
    { title: 'Slide 2', img: 'test2.png' },
    { title: 'Slide 3', img: 'test3.png' },
]


for (const slide of slides) {
    const img = new Image()
    img.src = slide.img
    
    const progressDot = document.createElement('button')
    progressDot.classList.add('slider__progress__dot')
    
    progressDot.addEventListener('click', () => {
        showSlide(slide)
    })

    sliderProgress.append(progressDot)
}


let slideIndex = 0


controlLeft.addEventListener('click', () => {
    slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 1
    showSlide(slides[slideIndex])
})

controlRight.addEventListener('click', () => {
    slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0
    showSlide(slides[slideIndex])
})


showSlide(slides[0])


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') controlLeft.click()
    if (event.key === 'ArrowRight') controlRight.click()
})

function showSlide(slide) {
    title.textContent = slide.title
    slideElement.style.backgroundImage = `url(${slide.img})`
    
    sliderProgress.childNodes.forEach(dot => dot.classList.remove('active'))
    sliderProgress.childNodes[slides.indexOf(slide)].classList.add('active')
}