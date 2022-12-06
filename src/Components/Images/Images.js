import { useState } from 'react';

import images from '~/assets/images';

function Images({ src, alt, className, ...props }) {
    const [imgError, setImgError] = useState('');
    const handleError = () => {
        setImgError(images.noImage);
    };
    return (
        <img
            src={imgError || src}
            alt={alt}
            {...props}
            className={className}
            onError={handleError}
        />
    );
}

export default Images;
