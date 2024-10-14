import React from 'react';
import './InfoPage.css';


const InfoPage = () => {
    return (
        <section className="info-section">

            <div className="info-header">
                <p className="powered-by">Powered by Llama-3</p>
                <h2 className="info-intro">Start coding bug free.</h2>
            </div>


            <div className="info-cards">
                <div className="card">
                    <h3>Llama-3 Assisted Auto-Debug.</h3>
                    <img src="/Llama-svg.svg" alt="AI Code AutoDebug Icon" className="card-icon" />
                    <p>Start writing Bug-free code using our built-in Auto debugger, powered by Llama 3.</p>
                </div>
                <div className="card">
                    <h3>Copilot Auto-complete Code.</h3>
                    <img src="/copilot-svg.svg" alt="AI Code AutoDebug Icon" className="card-icon" />
                    <p>Bug AI uses machine learning to intelligently complete your code by analyzing context, predicting next steps, and generating bug-free, optimized solutions. </p>
                </div>

                <div className="card">
                    <h3>Use Any Programming Language</h3>
                    <img src="/Language.svg" alt="AI Code AutoDebug Icon" className="card-icon" />
                    <p>Bug AI can help you debug, code, program and deploy in any programming language of your preference.</p>
                </div>
            </div>
        </section>
    );
};

export default InfoPage;
