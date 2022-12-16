import classNames from 'classnames/bind';
import styles from './ViewMore.module.scss';
import '~/styles/grid.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Item from '~/Components/Item';
import Title from '~/Components/Title';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_KEY, BASE_URL, IMG_URL } from '~/utils/constans';

const cx = classNames.bind(styles);

function ViewMore() {
    const params = useParams();
    const { media_type, type } = params;
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        let apiViewMore = '';
        if (type === 'trending') {
            apiViewMore = `${BASE_URL}/trending/${media_type}/week?api_key=${API_KEY}&page=${page}`;
        } else {
            apiViewMore = `${BASE_URL}/${media_type}/${type}?api_key=${API_KEY}&page=${page}`;
        }
        if (apiViewMore) {
            const fetchApi = async () => {
                const response = await axios.get(`${apiViewMore}`);
                setMovie((prev) => [
                    ...prev,
                    ...response.data.results.slice(0, 10),
                ]);
                setTotalPage(response.data.total_pages);
            };
            fetchApi();
        }
    }, [page, media_type, type]);
    console.log(movie);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('Wrapper-viewMore')}>
            <div className={cx('container')}>
                <Title
                    title={`${media_type.toUpperCase()} ${type.toUpperCase()}`}
                />
                <div className="row">
                    {movie.map((item) => {
                        return (
                            <div class="col l-2-4 m-4 c-6">
                                <Item
                                    to={`/details/${item.media_type}/${item.id}`}
                                    src={`${IMG_URL}${item.poster_path}`}
                                    name={item.title}
                                />
                            </div>
                        );
                    })}
                </div>
                {page <= totalPage ? (
                    <div className={cx('btn-load')}>
                        <Button onClick={handleLoadMore}>Load more</Button>
                    </div>
                ) : null}

                <div className={cx('scrollTop')}>
                    <Button
                        className={cx('btn-scroll')}
                        onClick={handleScrollTop}
                    >
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ViewMore;
