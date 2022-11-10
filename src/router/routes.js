import config from '~/config';
import Home from '~/Pages/Home';
import Login from '~/Pages/Login/Login';
import WatchMovie from '~/Pages/WatchMovie';
import DetailsMovie from '~/Pages/DetailsMovie';
import Search from '~/Pages/Search';

const puplicRouters = [
    { path: config.routes.home, combonent: Home },
    { path: config.routes.login, combonent: Login },
    { path: config.routes.detailsMovie, combonent: DetailsMovie },
    { path: config.routes.watchMovie, combonent: WatchMovie },
    { path: config.routes.search, combonent: Search },
];

const privateRouter = [];

export { puplicRouters, privateRouter };
