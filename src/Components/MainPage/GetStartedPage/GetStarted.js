import React from 'react';
import { Button } from 'react-bootstrap';
import './GetStarted.css';

const CustomSection = () => {
    return (
            <div className="custom-section">
                <div className="custom-content">
                    <h2>Debug your code realtime using applied Llama-3 Model Intelligence, Achieve greater productivity.</h2>
                    <Button className="custom-outline-light" variant="outline-light">
                        Try Bug AI
                    </Button>
                </div>
            </div>

    );
};

export default CustomSection;
