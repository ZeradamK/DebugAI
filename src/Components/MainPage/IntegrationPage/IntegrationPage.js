import React from 'react';
import './IntegrationCss.css';

const IntegrationPage = () => {
    return (
        <section className="info-integration">

            <div className="info-header">
                <h1>Integrate seamlessly with your dev setup.</h1>
            </div>

            <div className="info-boxes">
                <div className="box">
                    <div className="box-icon">
                        <img src="/editor-svg.svg" alt="Editor icon" />
                    </div>
                    <h3>Use the editor of your choice</h3>
                    <p>
                        Switch between VS Code and our web editor to keep coding and collaborating without skipping a beat.
                    </p>
                    <a href="#">VS Code Extension &gt;</a>
                </div>

                <div className="box">
                    <div className="box-icon">
                        <img src="/github.svg" alt="GitHub icon" />
                    </div>
                    <h3>GitHub integration</h3>
                    <p>
                        Review PRs in record time and get automatic deployment previews.
                    </p>
                    <a href="#">Install our GitHub App &gt;</a>
                </div>

                <div className="box">
                    <div className="box-icon">
                        <img src="/env.svg" alt="Environment icon" />
                    </div>
                    <h3>Pre-configured environments</h3>
                    <p>
                        We use Dev Containers to pre-configure your environments with all the required tools, libraries and dependencies, so you can skip the setup and start coding.
                    </p>
                    <a href="#">Learn more &gt;</a>
                </div>
            </div>
        </section>
    );
};

export default IntegrationPage;
