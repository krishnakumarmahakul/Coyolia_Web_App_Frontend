import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactmail.module.css';

interface FormData {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
}

const Contactmail: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        position: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        emailjs.send(
            'service_2fjmap8', // Replace with your EmailJS service ID
            'template_8h9xscs', // Replace with your EmailJS template ID
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                position: formData.position,
                email: formData.email
            },
            'u77ACP1YPy4znyDqR' // Replace with your EmailJS public key
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                position: '',
                email: ''
            });
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Coyolia </h1>
            <h1 className={styles.title}>Technology </h1>
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
                    
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contactmail;
