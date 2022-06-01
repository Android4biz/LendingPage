const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const cities = document.querySelectorAll('.information');
const linkLink = document.querySelectorAll('.item-admiral-link');


const activeSlide = n => {
  for(slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeCity = i => {
  for(city of cities){
    city.classList.remove('active');
  }
  cities[i].classList.add('active');
}

const activeLink = n => {
  for(link of linkLink){
    link.classList.remove('active');
  }
  linkLink[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
  activeCity(ind);
  activeLink(ind);
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
})

linkLink.forEach((item, indexLink) => {
  item.addEventListener('click', () => {
    index = indexLink;
    prepareCurrentSlide(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);