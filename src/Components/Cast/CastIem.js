import classNames from 'classnames/bind';

import styles from './Cast.module.scss';
import Images from '../Images/Images';
import { IMG_URL } from '~/utils/constans';

const cx = classNames.bind(styles);
function CastItem({ data }) {
    return (
        <div className={cx('wraper-castCastItem')}>
            <Images
                className={cx('avatar')}
                src={`${IMG_URL}${data.profile_path}`}
            />
            <p className={cx('name')}>{data.name}</p>
            <p className={cx('nick-name')}>{data.character}</p>
        </div>
    );
}

export default CastItem;
