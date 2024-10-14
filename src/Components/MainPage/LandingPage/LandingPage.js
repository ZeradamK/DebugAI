import React, {useEffect, useRef} from 'react';
import './LandingPage.css';
import { ReactTyped as Typed } from 'react-typed'; // Import ReactTyped

const LandingPage = () => {

    const lottieRef = useRef(null);

    useEffect(() => {
        // Ensure the dotLottie player is inserted only once
        if (lottieRef.current && !lottieRef.current.hasChildNodes()) {
            const lottiePlayer = document.createElement('dotlottie-player');
            // Use the new Lottie animation URL provided
            lottiePlayer.src = "https://lottie.host/1999a164-f38f-461f-a248-6e7611165ef6/OrwqV25kld.json";
            lottiePlayer.style.width = "400px"; // Updated size
            lottiePlayer.style.height = "400px"; // Updated size
            lottiePlayer.setAttribute('background', 'transparent');
            lottiePlayer.setAttribute('speed', '1');
            lottiePlayer.setAttribute('loop', '');
            lottiePlayer.setAttribute('autoplay', '');
            lottieRef.current.appendChild(lottiePlayer);
        }
    }, []);
    return (
        <div className="landing-page">
            <div className="left-section mx-lg-5">
                <h1>
                    <Typed
                        strings={['Code.', 'Debug.', 'Deploy.']}
                        typeSpeed={80}
                        backSpeed={50}
                        loop={true}
                        backDelay={1500}
                        startDelay={500}
                        showCursor={true}
                        cursorChar="|"
                    />
                </h1>
            </div>
            <div className="right-section">
                <div ref={lottieRef}></div>
            </div>
        </div>
    );
};

export default LandingPage;
