// src/components/SliderComponent.js
import React from 'react';

const SliderComponent = () => {
    return (
        <div style={{ width: '100%', height: '100vh', border: 'none' }}>
            <iframe
                src="/mobile.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Custom Slider"
            />
        </div>
    );
};

export default SliderComponent;