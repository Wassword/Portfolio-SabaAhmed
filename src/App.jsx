import Header from './components/Header';
import About from './components/About';
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

            {/* Add more sections as needed */}
        </div>
    );
}

export default App;
