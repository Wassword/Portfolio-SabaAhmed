import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            <section className="section header-section">
                <Header />
            </section>

            <section className="section about-section">
                <About />
            </section>

            <section className="section work-section">
                <Work />
            </section>

            <section className="section contact-section">
                <Contact />
            </section>
            

            {/* Add more sections as needed */}
        </div>
    );
}

export default App;
