import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header/Header";
import LandingPage from "./Components/MainPage/LandingPage/LandingPage";
import LlamaIDE from "./Components/CodeEditor/LlamaIDE";
import Footer from "./Components/Footer/Footer";
import InfoPage from "./Components/MainPage/InfoPage/InfoPage";
import IntegrationPage from "./Components/MainPage/IntegrationPage/IntegrationPage";
import GetStarted from "./Components/MainPage/GetStartedPage/GetStarted";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>

                  <Route path="/" element={
                      <>
                          <LandingPage />
                          <InfoPage />
                          <IntegrationPage />
                          <GetStarted />
                      </>
                  } />
                  <Route path="/ide" element={<LlamaIDE />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
