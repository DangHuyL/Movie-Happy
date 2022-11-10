import { faBox, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Button from '~/Components/Button';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const headerRef = useRef();
    useEffect(() => {
        const handleFixedHeader = () => {
            const header = headerRef.current;
            const sticky = header.offsetTop;

            if (header) {
                if (window.pageYOffset > sticky) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleFixedHeader);
        return () => window.removeEventListener('scroll', handleFixedHeader);
    }, []);

    return (
        <div className={cx('wrapper')} ref={headerRef}>
            <div className={cx('header-logo')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <FontAwesomeIcon icon={faBox} className={cx('icon')} />
                    <span className={cx('title')}>PHIMMOI</span>
                </Link>
            </div>
            <div className={cx('active')}>
                <Link to={config.routes.search} className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Button to={config.routes.login} primary>
                    Sign in
                </Button>
            </div>
        </div>
    );
}

export default Header;
