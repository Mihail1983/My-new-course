
const numberOfFilms = +prompt("Cколько фильмов Вы уже посмотрели?", '');

const personalMovieDB =  {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

const a = prompt("Один из последних фильмов", ''),
      b = prompt("На сколько оцениваете его?", ''),
      c = prompt("Один из последних фильмов", ''),
      d = prompt("На сколько оцениваете его?", '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
