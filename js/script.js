///================================================================

// remove ads
// fill in the form / add a movie
// you can delete any movie and the numbering won't be broken
// if the length of a name of a movie is longer than 15 letters , cut it off and add multiple dots
// сsort alphabetically

const adv_div = document.querySelectorAll('.promo__adv img');
const div__promo__genre = document.querySelector('.promo__genre');
const promo__bg = document.querySelector('.promo__bg');
const list = document.querySelector('.promo__interactive-list');

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим ..."
    ]
};
//1
const deleteAdv = (arr) => {
arr.forEach(item => {
    item.addEventListener('click', ()=>{
        item.remove()
     });

})
};
deleteAdv(adv_div);
//2  
const changeGenre = () => {
    div__promo__genre.innerText = 'Драма'
};
changeGenre();
//3
const changeImage = () => {
promo__bg.style.backgroundImage = 'url("img/bg.jpg")'
};
changeImage();
//4
const sorted = (arr) => {
    arr.sort();
};
sorted(movieDB.movies);

let form = document.querySelector(".add"),
    addingMovie = form.querySelector('.adding__input'),
    input__checkbox = form.querySelector('[type="checkbox"]'),
    button = form.querySelector('button');


form.addEventListener('submit', funcForm);// слушатель на форму а не кнопку
function funcForm(e){
    e.preventDefault();
    sorted(movieDB.movies);
    let newFilm = addingMovie.value;
    const fav = input__checkbox.checked;
            
        if(fav){
            console.log('fav movie added')
        };
            
            if(newFilm){
                newFilm.length > 10 && (newFilm = `${newFilm.slice(0, 10)}...`);
                movieDB.movies.push(newFilm);
                addingMovie.value = '';
                createMovieList(movieDB.movies,list);
            };
            form.reset();
            // e.target.reset();
};


function createMovieList(films,parent){  
    parent.innerHTML = '';
    sorted(films);
        for(let i = 0; i < films.length; i++){    
            parent.innerHTML += `<li class="promo__interactive-item"> ${i + 1}).  ${movieDB.movies[i]}
                                    <div class="delete"></div>
                                </li>`
        };

            document.querySelectorAll('.delete').forEach((btn, i) =>{
                btn.addEventListener('click', () =>{
                        btn.parentElement.remove();
                        movieDB.movies.splice(i, 1);
                        createMovieList(films,parent)
                        sorted(movieDB.movies);
                })
            })
};
createMovieList(movieDB.movies,list)


