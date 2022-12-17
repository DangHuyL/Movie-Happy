// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import Button from '~/Components/Button';
import styles from './LoginForm.module.scss';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function LoginForm() {
    const moreInforRef = useRef();
    const [moreInfor, setMoreInfor] = useState('Tìm hiểu thêm');
    const [showPassWord, setShowPassWord] = useState('password');

    const formik = useFormik({
        initialValues: {
            email: '',
            passWord: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    'Please enter a valid email address',
                ),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Password must be 7-19 characters and contain at least one letter, one number and a special character',
                ),
        }),
        onSubmit: (values) => {
            window.alert('Form submited');
            console.log(values);
        },
    });

    const handleHidePassword = () => {
        if (showPassWord === 'password') setShowPassWord('text');
        if (showPassWord === 'text') setShowPassWord('password');
    };

    const handleMoreInfor = () => {
        if (moreInfor === 'Tìm hiểu thêm') {
            setMoreInfor('Thu gọn');
            moreInforRef.current.classList.add('display');
        }
        if (moreInfor === 'Thu gọn') {
            setMoreInfor('Tìm hiểu thêm');
            moreInforRef.current.classList.remove('display');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Sign In</h1>

            <form className={cx('input_text')} onSubmit={formik.handleSubmit}>
                <div className={cx('inputEmail')}>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        id="email"
                        type="email"
                        placeholder="Email hoặc số điện thoại"
                        className={cx('input')}
                    />
                    {formik.errors.email && (
                        <p className={cx('warm')}>{formik.errors.email}</p>
                    )}
                </div>

                <div className={cx('password')}>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password"
                        type={showPassWord}
                        placeholder="Mật khẩu"
                        className={cx('input')}
                    />
                    <button
                        className={cx('hideOnBtn')}
                        onClick={handleHidePassword}
                    >
                        {<FontAwesomeIcon icon={faEye} />}
                    </button>
                </div>

                {formik.errors.password && (
                    <p className={cx('warm')}>{formik.errors.password}</p>
                )}

                <div className={cx('action')}>
                    <Button type="submit" className={cx('loginBtn', 'btnLog')}>
                        Sign in
                    </Button>
                    {/* <Button
                        className={cx('loginBtn')}
                        leftIcon={<FontAwesomeIcon icon={faGoogle} />}
                    >
                        Login with Google
                    </Button>
                    <Button
                        className={cx('loginBtn', 'btnFB')}
                        leftIcon={<FontAwesomeIcon icon={faFacebook} />}
                    >
                        Login with Facebook
                    </Button> */}
                </div>
            </form>

            <div className={cx('help')}>
                <div>
                    <input type="checkbox" className={cx('rememberMe')} />
                    <span>Ghi nhớ tôi.</span>
                </div>

                <a href="/#" className={cx('rememberMe-link')}>
                    Bạn cần trợ giúp ?
                </a>
            </div>
            <div className={cx('inforMore')}>
                <p className={cx('login-signup-now')}>
                    Bạn mới tham gia Netflix?
                    <a href="/#" className={cx('link-login')}>
                        Đăng ký ngay
                    </a>
                </p>
                <p className={cx('learnMore')}>
                    Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không
                    phải là robot.
                    <button
                        className={cx('btn-learnMore')}
                        onClick={handleMoreInfor}
                    >
                        {moreInfor}
                    </button>
                    <p className="recaptcha-disclosure-text" ref={moreInforRef}>
                        Thông tin do Google reCAPTCHA thu thập sẽ tuân theo
                        <a
                            href="https://policies.google.com/terms"
                            className={cx('link-policy')}
                        >
                            {' '}
                            Chính sách Quyền riêng tư
                        </a>{' '}
                        and
                        <a
                            href="https://policies.google.com/terms"
                            className={cx('link-policy')}
                        >
                            {' '}
                            Điều khoản dịch vụ
                        </a>{' '}
                        của Google, và được dùng để cung cấp, duy trì và cải
                        thiện dịch vụ reCAPTCHA cũng như các mục đích bảo mật
                        nói chung (thông tin này không được dùng để cá nhân hóa
                        quảng cáo của Google).
                    </p>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;
