import config from '~/config';
import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import WatchMovie from '~/Pages/WatchMovie';
import DetailsMovie from '~/Pages/DetailsMovie';

const puplicRouters = [
    { path: config.routes.home, combonent: Home },
    { path: config.routes.login, combonent: Login },
    { path: config.routes.detailsMovie, combonent: DetailsMovie },
    { path: config.routes.watchMovie, combonent: WatchMovie },
];

const privateRouter = [];

export { puplicRouters, privateRouter };
