const currentCityWeather = async () => {
    
    const response = await fetch('http://api.weatherapi.com/v1/current.json?q=Lviv&lang=uk&key=40a1250f4d7545b29fc172232231210')
    const data = await response.json()

    if (data.current) {
      document.querySelector('#temperature').innerText = data.current.temp_c + "°C";
      document.querySelector('#weather-text').innerText = data.current.condition.text;
      document.querySelector('#weather-icon').innerHTML = `<img src="${data.current.condition.icon}" width="60px" height="55px">`;
    }
}
currentCityWeather()

function currentLocaleTime() {
    const currentTime = new Date().toLocaleTimeString()
    document.querySelector('.clock').innerHTML = currentTime
}
setInterval(currentLocaleTime, 1000)
currentLocaleTime()

const header = document.getElementById("header")
const scrollHeight = 110

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > scrollHeight) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
})

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.83857300637835, lng: 24.01965868829307 },
    zoom: 16,
  });
}

let sliderImage = new Swiper('#slider-image', {
  parallax: true,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // mousewheel: {
  //   sensitivity : 1,
  //   eventsTarget: '#slider-image'
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

let sliderText = new Swiper('#slider-text', { 
  parallax: true,
  speed: 1000,
  // mousewheel: {
  //   sensitivity : 1,
  //   eventsTarget: '#slider-text'
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

sliderImage.controller.control = sliderText;
sliderText.controller.control = sliderImage;

const scrollTopButton = document.getElementById('scroll-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollTopButton.classList.add('show')
  } else {
    scrollTopButton.classList.remove('show')
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
});