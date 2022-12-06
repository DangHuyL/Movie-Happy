import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-wraper')}>
            <p className={cx('footer-name')}>Nguyen Dang Huy</p>
            <div className={cx('footer-contact')}>
                <a
                    href="https://www.facebook.com/danghuy271"
                    alt="Link-FB"
                    target="blank"
                    className={cx('icon-contact')}
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://github.com/DangHuyL"
                    alt="Link-FB"
                    target="blank"
                    className={cx('icon-contact')}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
