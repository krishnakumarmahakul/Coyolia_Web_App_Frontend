import emailjs from '@emailjs/browser';
import styles from './contactmail.module.css';
import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    message: string;
}

const Contactmail: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        position: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const currentTime = new Date().toLocaleString();

        const templateParams = {
            name: `${formData.firstName} ${formData.lastName}`,
            position: formData.position,
            email: formData.email,
            message: formData.message,
            reply_to: formData.email,
            time: currentTime
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            setFormData({
                firstName: '',
                lastName: '',
                position: '',
                email: '',
                message: ''
            });
        }, (error) => {
            // console.log('FAILED...', error);
            
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Coyolia</h1>
            <h1 className={styles.title}>Technology</h1>
            <div className={styles.formcontainer}>
                <div className={styles.header}>
                    <p className={styles.subtitle}>Connect with Like-Minded Learners and Experts</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <p className={styles.emailPrompt}>Drop in your email for Event Updates</p>

                    <div className={styles.formGroup}>
                        <label htmlFor="firstName" className={styles.label}>First name*</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="lastName" className={styles.label}>Last name*</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="position" className={styles.label}>Position*</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Message*</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.input}
                            rows={4}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contactmail;
