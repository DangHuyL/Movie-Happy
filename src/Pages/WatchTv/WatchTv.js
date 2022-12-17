import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import TvVideo from '~/Components/WatchTv/TvVideo';
import TvInfor from '~/Components/WatchTv/TvInfor';
import styles from './WatchTv.module.scss';
import Similar from '~/Components/Similar';
import SeasonItem from '~/Components/WatchTv/SeasonItem';
import { BASE_URL } from '~/utils/constans';

const cx = classNames.bind(styles);

function WatchTv() {
    const { esp, season, id } = useParams();
    const [seasonData, setSeasonData] = useState([]);
    const [EspCurrent, setEspCurrent] = useState([]);
    const [nameTv, setNameTv] = useState('');

    useEffect(() => {
        const getSeasonInfor = (id) => {
            const fetchApi = async () => {
                const res = await axios.get(
                    `${BASE_URL}/tv/${id}?api_key=c2d7e74ca48d88304696a254851ce44f`,
                );
                setSeasonData(res.data.seasons);
                setNameTv(res.data.name);
            };
            fetchApi();
        };
        getSeasonInfor(id);
    }, [id]);

    useEffect(() => {
        const getEspCurrent = (id, season, esp) => {
            const fetchApi = async () => {
                const res = await axios.get(
                    `${BASE_URL}/tv/${id}/season/${season}/episode/${esp}?api_key=c2d7e74ca48d88304696a254851ce44f`,
                );
                setEspCurrent(res.data);
            };
            fetchApi();
        };
        getEspCurrent(id, season, esp);
    }, [id, season, esp]);

    return (
        <div className={cx('wrapper-watchTv')}>
            <div className={cx('container-watchTv')}>
                <div className={cx('content-watchTv')}>
                    <div className={cx('WatchTv-video')}>
                        <TvVideo id={id} espTv={esp} seasonTv={season} />
                        <TvInfor nameTv={nameTv} EspCurrent={EspCurrent} />
                    </div>
                    <div className={cx('WatchTv-season')}>
                        {seasonData.map((item) => {
                            if (item.season_number > 0) {
                                return (
                                    <SeasonItem
                                        key={item.id}
                                        id={id}
                                        item={item}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
                <div className={cx('WatchTv-semilar')}>
                    <Similar />
                </div>
            </div>
        </div>
    );
}

export default WatchTv;
