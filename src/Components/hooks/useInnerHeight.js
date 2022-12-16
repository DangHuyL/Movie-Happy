import { useEffect, useState } from 'react';

function useInnerHeight() {
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        const handleRelize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('relize', handleRelize);
        return () => {
            window.removeEventListener('resize', handleRelize);
        };
    }, []);
    return height;
}

export default useInnerHeight;
