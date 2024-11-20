import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setStatus('success');
            form.current.reset();
            setTimeout(() => setStatus(''), 5000);
        }, (error) => {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        });
    };

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Let's Connect!</h2>
            <p className="section-description">
                Thank you for visiting my portfolio! I'm always excited to collaborate on 
                innovative projects and explore new opportunities. Drop me a message 
                below, and I'll get back to you soon.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Hi, I am interested in..."
                        required
                        rows="5"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Send Message <span>→</span>
                </button>

                {status === 'success' && (
                    <div className="status-message success">
                        <i className="fas fa-check-circle"></i>
                        Message sent successfully! Thank you for reaching out.
                    </div>
                )}
                {status === 'error' && (
                    <div className="status-message error">
                        <i className="fas fa-exclamation-circle"></i>
                        Oops! Something went wrong. Please try again.
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact; 