const Footer = () => {
        const currentYear = new Date().getFullYear();
    
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <p className="copyright">
                            © {currentYear} Saba Ahmed. All rights reserved.
                        </p>
                        <p className="footer-tagline">
                            Built with React & ❤️
                        </p>
                    </div>
                </div>
            </footer>
        );
    };
    
    export default Footer; 