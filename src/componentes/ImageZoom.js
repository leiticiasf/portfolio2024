// src/ImageZoom.js
import React, { useState } from 'react';

const ImageZoom = ({ src, alt }) => {
    const [transform, setTransform] = useState('scale(1)');

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        setTransform(`scale(2) translate(-${xPercent}%, -${yPercent}%)`);
    };

    const handleMouseLeave = () => {
        setTransform('scale(1)');
    };

    return (
        <div
            className="image-zoom-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="image-zoom">
                <img src={src} alt={alt} style={{ transform }} />
            </div>
        </div>
    );
};

export default ImageZoom;
