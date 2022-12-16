import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from '~/utils/constans';

import styles from './Trailer.module.scss';

const cx = classNames.bind(styles);

function Trailer({ show, setShow }) {
    const [data, setData] = useState([]);
    const { media_type, id } = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(
                `${BASE_URL}/${media_type}/${id}/videos?api_key=${API_KEY}`,
            );
            setData(response.data.results);
        };
        fetchApi();
    }, [media_type, id]);

    return (
        <div
            style={{ display: show ? 'flex' : 'none' }}
            className={cx('overlay')}
            onClick={() => setShow(false)}
        >
            <div
                className={cx('Container')}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={cx('header')}>
                    <h2 className={cx('title')}>{`${media_type} trailer`}</h2>
                    <buton
                        className={cx('close')}
                        onClick={() => setShow(false)}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </buton>
                </div>
                <div className={cx('Content')}>
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <h4 className={cx('trailer-name')}>
                                    {item.name}
                                </h4>
                                <iframe
                                    style={{ height: '315px' }}
                                    width="100%"
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allowFullscreen
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Trailer;
