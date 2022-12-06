export const addMovieLocal = (movie) => {
    let historyMovie = localStorage.getItem('Movie-history')
        ? JSON.parse(localStorage.getItem('Movie-history'))
        : [];
    const exisMovie = historyMovie.some((p) => p.id === movie.id);
    if (exisMovie) {
        historyMovie = historyMovie.filter((item) => item.id !== movie.id);
    }
    historyMovie.push(movie);
    localStorage.setItem('Movie-history', JSON.stringify(historyMovie));
};

export const getMovieHistory = () => {
    const historyMovie = localStorage.getItem('Movie-history')
        ? JSON.parse(localStorage.getItem('Movie-history'))
        : [];

    const rerult = historyMovie.sort((a, b) => b.viewAt - a.viewAt);
    return rerult;
};
