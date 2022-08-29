// =================Loader=====================

onload = () => {
    const load =document.getElementById('load')
    setTimeout(() =>{
        load.style.display='none'
    },3690)
}


// Show Menu

const navMenu= document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')


// Menu Show

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu Hidden

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    // loop:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== NEW SWIPER ===============*/


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 260) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration:2500,
    delay:400,
    // rest:true
})



sr.reveal(`.home-swiper, .new-swiper, .favourite__img, .home__search, .subscribe__container, .discover__container, .steps__bg`)
sr.reveal(`.category__data, .trick__content, .footer__content`, {interval:100})
sr.reveal(`.about__data, .discount__img, .section__title`, {origin:'left'})
sr.reveal(`.about__img, .discount__data, .steps-title, .newsletter__description`, {origin:'right'})
sr.reveal(`.steps__card, .favourite__card, .questions__group, .footer`, {interval:100})


var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centerInsufficientSlides:true,
    centeredSlides: true,
    slidesPerView: "auto",
    // loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
     
      
    },
  });





const API_KEY = `84e0ae7ae4b85054f85d8f6d10cee741`
const image_path = `https://image.tmdb.org/t/p/w1280`

const moviepopularImg = document.querySelector('.movie__popular-img')
const moviepopulardate = document.querySelector('.movie__popular-date')
const moviepopularTitle = document.querySelector('.movie__popular-title')

const input = document.querySelector('.home__search-input')
const input_series = document.querySelector('.home__search-input-series')
const btn = document.querySelector('.search__content')
const btn_series = document.querySelector('.search__content-series')
const search_container = document.querySelector('.search__movies')
const search_container_series = document.querySelector('.search__series')
get_popular_series()

get_popular_movies()
get_trending__one()


function get_popular_movies(){
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    
    .then(popular => {
        return popular.json();
    }).then(popular_movie);
}

function popular_movie(popular){
    console.log(popular)
    moviepopularTitle.innerHTML = `${popular.results[0].title}`
    const moviepopularDescription = document.querySelector('.movie__popular-description')
    moviepopularDescription.innerHTML = `${popular.results[0].overview}`
    moviepopularImg.setAttribute('src', `${image_path + popular.results[0].poster_path}`)
    moviepopulardate.innerHTML = `${popular.results[0].release_date}`
}



const trending__oneImg = document.querySelector('.trending__one-img')
const trending__onedate = document.querySelector('.trending__one-date')
const trending__oneTitle = document.querySelector('.trending__one-title')
const fav_slider = document.querySelector('.favourite-slider')
const fav_series_slider = document.querySelector('.favourite__series-slider')


function get_trending__one(){
    fetch(`
    https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(popular => {
        return popular.json();
    }).then(trending__one);
}


function trending__one(popular){
    console.log(popular)
    trending__oneTitle.innerHTML = `${popular.results[0].title}`
    const trending__oneDescription = document.querySelector('.trending__one-description')
    trending__oneDescription.innerHTML = `${popular.results[0].overview}`
    trending__oneImg.setAttribute('src', `${image_path + popular.results[0].poster_path}`)
    trending__onedate.innerHTML = `${popular.results[0].release_date}`
}


const seriespopularImg = document.querySelector('.series__popular-img')
const seriespopulardate = document.querySelector('.series__popular-date')
const seriespopularTitle = document.querySelector('.series__popular-title')


function get_popular_series(){
    fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    .then(series => {
        return series.json();
    }).then(popular_series);
}


function popular_series(series){
    console.log(series)
    seriespopularTitle.innerHTML = `${series.results[0].name}`
    const seriespopularDescription = document.querySelector('.series__latest-description')
    seriespopularDescription.innerHTML = `${series.results[0].overview}`
    seriespopularImg.setAttribute('src', `${image_path + series.results[0].poster_path}`)
    seriespopulardate.innerHTML = `${series.results[0].first_air_date}`
}







const slidertrending = document.querySelector('.slider-trending')
const sliderpopular = document.querySelector('.slider-popular')
const slidertvseries = document.querySelector('.slider-tvseries')
const trendingButton = document.querySelector('.trendingbutton')

function get_trending(){
    fetch(`
    https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(trending => {
        return trending.json();
    }).then(trendingslider);
}

get_trending()

function trendingslider(trending){
    console.log('Trending Top 9')
    console.log(trending.results)
    
    const results = trending.results
  
    
    slidertrending.innerHTML = results.slice(0, 15).map(e => {
        return `
        
        
                        <!--==================== DISCOVER 1 ====================-->

                <div class="discover__card swiper-slide" data-id = "${e.id}">
                <img src="${image_path + e.poster_path}" alt="" class="discover__img">
                
                </div>
        `
    }).join('')

   
    const cards = document.querySelectorAll('.discover__card')
    add_click_effect_to_card(cards)
                    
                           
    

}


function get_popular(){
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then(popular => {
        return popular.json();
    }).then(popularslider);    
}
get_popular()

function popularslider(popular){
    console.log('Popular Top 9')
    console.log(popular.results)
    const result_popular = popular.results
    
    sliderpopular.innerHTML = result_popular.slice(0, 15).map(e => {
        return `
        
        
                        <!--==================== DISCOVER 1 ====================-->

                <div class="discover__card swiper-slide" data-id = "${e.id}">
                <img src="${image_path + e.poster_path}" alt="" class="discover__img">
                
                </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.discover__card')
    add_click_effect_to_card(cards)

}

function get_series(){
    fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
    .then(tvseries => {
        return tvseries.json();
    }).then(seriesslider);  
}
get_series()



function seriesslider(tvseries){
    console.log('Tv Series Top 9')
    console.log(tvseries.results)
    const result_series = tvseries.results

    slidertvseries.innerHTML = result_series.slice(0, 15).map(e => {
        return `
        
        
                        <!--==================== DISCOVER 1 ====================-->

                <div class="tvseries__card swiper-slide" data-id = "${e.id}">
                <img src="${image_path + e.poster_path}" alt="" class="discover__img">
                
                </div>
        `
    }).join('')

    const series_cards = document.querySelectorAll('.tvseries__card')
    add_click_effect_to_series(series_cards)

}


     
// POPUP

async function check(card){
    const movie_id = card.getAttribute('data-id')

    const movie = await get_movie_by_id(movie_id)

    
    if(movie.hasOwnProperty('status_code')){
        console.log('got it')
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'API Dosent Respond'
          })

    }else{
        const trailer = await get_movie_trailer(movie_id)
        if(trailer.length === 0){
            console.log('hacked')
            terminate()
        }else{
            const main =  document.querySelector('.main')
            main.style.transform = 'scale(0)'
            const footer =  document.querySelector('.footer')
            footer.style.transform = 'scale(0)'
            const scrollup =  document.querySelector('.scrollup')
            scrollup.style.transform = 'scale(0)'
            console.log('yo')
            show_popup(card)
        }

        
        
    }

    
}




async function check_series(series_card){
    const series_id = series_card.getAttribute('data-id')

    const series = await get_series_by_id(series_id)

    
    if(series.hasOwnProperty('status_code')){
        console.log('got it')
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'API Dosent Respond'
          })

    }else{
        const trailer = await get_series_trailer(series_id)
        if(trailer.length === 0){
            console.log('hacked')
            terminate()
        }else{
            const main =  document.querySelector('.main')
            main.style.transform = 'scale(0)'
            const footer =  document.querySelector('.footer')
            footer.style.transform = 'scale(0)'
            const scrollup =  document.querySelector('.scrollup')
            scrollup.style.transform = 'scale(0)'
            console.log('yo')
            show_popup_series(series_card)
        }

        
        
    }

    
}
const popup_container = document.querySelector('.popup-container')

function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            check(card)
        
    })
})
}


function add_click_effect_to_series (series_cards){
    series_cards.forEach(series_card => {
        series_card.addEventListener('click', () => {
            check_series(series_card)
            
        })
    })
}

async function get_movie_by_id (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData
}
async function get_movie_trailer (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
    const respData = await resp.json()
    console.log(respData.results)
    
        

    
        return respData.results
        
    
}


async function show_popup (card) {
    popup_container.classList.add('show-popup')

    const movie_id = card.getAttribute('data-id')
    const movie = await get_movie_by_id(movie_id)
    const movie_trailer = await get_movie_trailer(movie_id)

    popup_container.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${image_path + movie.poster_path})`

    popup_container.innerHTML = `
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left"><br>
                    <div class="poster-img">
                        <img src="${image_path + movie.poster_path}" alt="">
                    </div>
                    <div class="single-info">
                        <span>Add to favorites:</span>
                        <span class="heart-icon"><i class="ri-heart-fill"></i></span>
                    </div>
                </div>
                <div class="right"><br>
                    <h1>${movie.title}</h1>
                    <h3>${movie.tagline}</h3>
                    <div class="single-info-container">
                        <div class="single-info">
                            <span>Language:</span>
                            <span>${movie.spoken_languages[0].name}</span>
                        </div>
                        <div class="single-info">
                            <span>Length:</span>
                            <span>${movie.runtime} minutes</span>
                        </div>
                        <div class="single-info">
                            <span>Rate:</span>
                            <span>${movie.vote_average} / 10</span>
                        </div>
                        <div class="single-info">
                            <span>Budget:</span>
                            <span>$ ${movie.budget}</span>
                        </div>
                        <div class="single-info">
                            <span>Release Date:</span>
                            <span>${movie.release_date}</span>
                        </div>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            ${movie.genres.map(e => `<li>${e.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>${movie.overview}</p>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2><br>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie_trailer[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br><br>
                        </div>
                </div>
            </div>
    `
    const x_icon = document.querySelector('.x-icon')
    x_icon.addEventListener('click', () => popup_container.classList.remove('show-popup'))
    x_icon.addEventListener('click', () => {
        const main =  document.querySelector('.main')
        const footer =  document.querySelector('.footer')
        const scrollup =  document.querySelector('.scrollup')
        main.style.transform = 'scale(1)'
        footer.style.transfrom = 'scale(1)'
        scrollup.style.transfrom = 'scale(1)'
    })


    const heart_icon = popup_container.querySelector('.heart-icon')

    const movie_ids = get_LS()
    for(let i = 0; i <= movie_ids.length; i++) {
        if (movie_ids[i] == movie_id) heart_icon.classList.add('change-color')
    }

    heart_icon.addEventListener('click', () => {
        if(heart_icon.classList.contains('change-color')) {
            remove_LS(movie_id)
            heart_icon.classList.remove('change-color')
        } else {
            add_to_LS(movie_id)
            heart_icon.classList.add('change-color')
        }
        fetch_favorite_movies()
    })
}


// Local Storage
function get_LS () {
    const movie_ids = JSON.parse(localStorage.getItem('movie-id'))

    return movie_ids === null ? [] : movie_ids
}

function get_LS_series () {
    const series_ids = JSON.parse(localStorage.getItem('series-id'))
    return series_ids === null ? [] : series_ids
}


function add_to_LS_series (id) {
    const series_ids = get_LS_series()
    localStorage.setItem('series-id', JSON.stringify([...series_ids, id]))
}



function add_to_LS (id) {
    const movie_ids = get_LS()
    localStorage.setItem('movie-id', JSON.stringify([...movie_ids, id]))
}
function remove_LS (id) {
    const movie_ids = get_LS()
    localStorage.setItem('movie-id', JSON.stringify(movie_ids.filter(e => e !== id)))
}

function remove_LS_series (id) {
    const series_ids = get_LS_series()
    localStorage.setItem('series-id', JSON.stringify(series_ids.filter(e => e !== id)))
}

// Favorite Movies
async function fetch_favorite_movies () {
    fav_slider.innerHTML = ''

    const movies_LS = await get_LS()
    const movies = []
    for(let i = 0; i <= movies_LS.length - 1; i++) {
        const movie_id = movies_LS[i]
        let movie = await get_movie_by_id(movie_id)
        add_favorites_to_dom_from_LS(movie)
        movies.push(movie)
    }
}

fetch_favorite_movies()




// Favorite Series
async function fetch_favorite_series () {
    fav_series_slider.innerHTML = ''

    const series_LS = await get_LS_series()
    const seriess = []
    for(let i = 0; i <= series_LS.length - 1; i++) {
        const series_id = series_LS [i]
        let series = await get_series_by_id(series_id)
        add_favorites_series_to_dom_from_LS(series)
        seriess.push(series)
    }
}

fetch_favorite_series()

function add_favorites_to_dom_from_LS (movie_data) {
    fav_slider.innerHTML += `
                



            <div class = "favourite__card" data-id="${movie_data.id}">
                            <img src="${image_path + movie_data.poster_path}" alt="" class="discover__img favourite__img">
            </div>




    `

    const cards = document.querySelectorAll('.favourite__card')
    add_click_effect_to_card(cards)
}

function add_favorites_series_to_dom_from_LS (series_data) {
    fav_series_slider.innerHTML += `
                



            <div class = "favourite__card-series" data-id="${series_data.id}">
                            <img src="${image_path + series_data.poster_path}" alt="" class="discover__img favourite__img">
            </div>




    `
    const series_cards = document.querySelectorAll('.favourite__card-series')
    add_click_effect_to_series(series_cards)
}




async function get_series_by_id (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
    const respData = await resp.json()
    return respData
}
async function get_series_trailer (id) {
    const resp = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`)
    const respData = await resp.json()
    console.log(respData.results)
    
        

    
        return respData.results
        
    
}

async function show_popup_series(series_card){
    popup_container.classList.add('show-popup')

    const series_id = series_card.getAttribute('data-id')
    const series = await get_series_by_id(series_id)
    const series_trailer = await get_series_trailer(series_id)

    popup_container.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${image_path + series.poster_path})`

    popup_container.innerHTML = `
                                <span class="x-icon">&#10006;</span>
                                <div class="content">
                                    <div class="left">
                                        <div class="poster-img">
                                            <img src="${image_path + series.poster_path}" alt="">
                                        </div>
                                        <div class="single-info">
                                            <span>Add to favorites:</span>
                                            <span class="heart-icon"><i class="ri-heart-fill"></i></span>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <h1>${series.original_name}</h1>
                                        <h3>${series.tagline}</h3>
                                        <div class="single-info-container">
                                            <div class="single-info">
                                                <span>Language:</span>
                                                <span>${series.spoken_languages[0].name}</span>
                                            </div>
                                            <div class="single-info">
                                                <span>Episode Run Time:</span>
                                                <span>${series.episode_run_time} minutes</span>
                                            </div>
                                           
                                            
                                            <div class="single-info">
                                                <span>First Epsiode Date:</span>
                                                <span>${series.first_air_date}</span>
                                            </div>
                                        </div>
                                        <div class="genres">
                                            <h2>Genres</h2>
                                            <ul>
                                                ${series.genres.map(e => `<li>${e.name}</li>`).join('')}
                                            </ul>
                                        </div>
                                        
                                        <div class="trailer">
                                            <h2>Trailer</h2>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/${series_trailer[0].key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            `
    const x_icon = document.querySelector('.x-icon')
    x_icon.addEventListener('click', () => popup_container.classList.remove('show-popup'))
    x_icon.addEventListener('click', () => {
        const main =  document.querySelector('.main')
        const footer =  document.querySelector('.footer')
        const scrollup =  document.querySelector('.scrollup')
        main.style.transform = 'scale(1)'
        
        footer.style.transform = 'scale(1)'
        scrollup.style.transform = 'scale(1)'
    })


    const heart_icon = popup_container.querySelector('.heart-icon')

    const series_ids = get_LS_series()
    for(let i = 0; i <= series_ids.length; i++) {
        if (series_ids[i] == series_id) heart_icon.classList.add('change-color')
    }

    heart_icon.addEventListener('click', () => {
        if(heart_icon.classList.contains('change-color')) {
            remove_LS_series(series_id)
            heart_icon.classList.remove('change-color')
        } else {
            add_to_LS_series(series_id)
            heart_icon.classList.add('change-color')
        }
        fetch_favorite_series()
    })
    
}
function terminate(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'API Dosent Respond'
    })
}










async function get_movie_by_search (search_term) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`)
    const respData = await resp.json()
    if(respData.results.length === 0){
        console.log('Hey You Hacked')
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'API Dosent Found Any Result Try Other Search'
        })

    }
    console.log(respData.results)
    return respData.results
}


input.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){

        add_searched_movies_to_dom()
    }
 

    
    
});

btn.addEventListener('click', add_searched_movies_to_dom)

async function add_searched_movies_to_dom () {
    const data = await get_movie_by_search(input.value)

    search_container.innerHTML = data.slice(0,9).map(e => {
        return `
        <div class="steps__card" data-id="${e.id}">
        <img src="${image_path + e.poster_path}" alt="" class="search__img">
        
    </div>
        `
    }).join('')

    const cards = document.querySelectorAll('.steps__card')
    add_click_effect_to_card(cards)
}





async function get_series_by_search (search_term_series) {
    const resp = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search_term_series}`)
    const respData = await resp.json()
    if(respData.results.length === 0){
        console.log('Hey You Hacked')
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'API Dosent Found Any Result Try Other Search'
        })

    }
    console.log(respData.results)
    return respData.results
}


input_series.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){

        add_searched_series_to_dom()
    }
 

    
    
});

btn_series.addEventListener('click', add_searched_series_to_dom)

async function add_searched_series_to_dom () {
    const data = await get_series_by_search(input_series.value)

    search_container_series.innerHTML = data.slice(0,9).map(e => {
        return `
        <div class="steps__card-series" data-id="${e.id}">
        <img src="${image_path + e.poster_path}" alt="" class="search__img">
        
    </div>
        `
    }).join('')

    const series_cards = document.querySelectorAll('.steps__card-series')
    add_click_effect_to_series(series_cards)




}


function happy(){
    Swal.fire({
        title: '<strong><em>Thanking You</em></strong>',
        icon: 'Success',
        html:
          '<b>Keep Smiling It Suits You</b>', 
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        confirmButtonText:
          'Close'        
        
      })
}
