// src/components/ProgressBar.js
import React, { useEffect, useState } from 'react';

function ProgressBar({ progress }) {
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">{progress}%</span>
        </div>
    );
}

export default ProgressBar;
