import classNames from 'classnames/bind';
import Images from '../Images/Images';
import styles from './WatchTvs.module.scss';
import { IMG_URL } from '~/utils/constans';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function EspItem({ item, id }) {
    return (
        <NavLink
            to={`/watch/tv/${id}/season/${item.season_number}/esp/${item.episode_number}`}
            className={(nav) => cx('Espt-wrapper', { active: nav.isActive })}
        >
            <Images
                className={cx('Esp-Img')}
                src={`${IMG_URL}${item.still_path}`}
                alt={item.name}
            />
            <div className={cx('Esp-content')}>
                <p>Episode {item.episode_number}</p>
                <p className={cx('Esp-name')}>Name: {item.episode_number}</p>
            </div>
        </NavLink>
    );
}

export default EspItem;
