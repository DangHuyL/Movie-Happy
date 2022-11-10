import classNames from 'classnames/bind';
import Button from '~/Components/Button';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);
function LoginForm() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Sign in</p>
            <div className={cx('action')}>
                <Button>Login with Google</Button>
                <Button>Login with Facebook</Button>
            </div>
        </div>
    );
}

export default LoginForm;
