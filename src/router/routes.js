import config from '~/config';
import Home from '~/Pages/Home/Home';
import Login from '~/Pages/Login/Login';
import Watch from '~/Pages/Watchs/Watch';
import WatchTv from '~/Pages/WatchTv';
import DetailsMovie from '~/Pages/DetailsMovie/DetailsMovie';
import Search from '~/Pages/Search/Search';
import ViewMore from '~/Pages/ViewMore';

const puplicRouters = [
    { path: config.routes.home, combonent: Home },
    { path: config.routes.login, combonent: Login },
    { path: config.routes.detailsMovie, combonent: DetailsMovie },
    { path: config.routes.watch, combonent: Watch },
    { path: config.routes.search, combonent: Search },
    { path: config.routes.viewMore, combonent: ViewMore },
    { path: config.routes.watchTv, combonent: WatchTv },
];

const privateRouter = [];

export { puplicRouters, privateRouter };
