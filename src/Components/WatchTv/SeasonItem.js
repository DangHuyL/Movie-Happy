import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Images from '../Images/Images';
import EspItem from './EspItem';
import styles from './WatchTvs.module.scss';
import { IMG_URL, BASE_URL, API_KEY } from '~/utils/constans';

import axios from 'axios';

const cx = classNames.bind(styles);

function SeasonItem({ item, id }) {
    const [showEsp, setShowEsp] = useState(false);
    const [EspData, setEspData] = useState([]);
    const handleShowEsp = () => {
        showEsp === false ? setShowEsp(true) : setShowEsp(false);
    };

    useEffect(() => {
        const getEsp = (season, id) => {
            const fetchApi = async () => {
                const res = await axios.get(
                    `${BASE_URL}/tv/${id}/season/${season}?api_key=${API_KEY}`,
                );
                setEspData(res.data.episodes);
            };
            fetchApi();
        };
        getEsp(item.season_number, id);
    }, [item.season_number, id]);
    return (
        <>
            <div className={cx('season-wrapper')} onClick={handleShowEsp}>
                <Images
                    className={cx('season-img')}
                    src={`${IMG_URL}/${item.poster_path}`}
                    alt={item.name}
                />

                <div className={cx('season-content')}>
                    <p>{item.name}</p>
                    <p>{item.episode_count} episode</p>
                </div>
            </div>
            <div className={cx('season-esp')}>
                {showEsp &&
                    EspData.map((item) => {
                        return <EspItem key={item.id} item={item} id={id} />;
                    })}
            </div>
        </>
    );
}

export default SeasonItem;
