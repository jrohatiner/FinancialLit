import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/reset-password', { email });
            setMessage('Password reset email sent');
        } catch (err) {
            setMessage('Error sending password reset email');
        }
    };

    return (
        <div className="reset-password-container">
            <form className="reset-password-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="reset-password-input"
                    required
                />
                <button type="submit" className="reset-password-button">Send Reset Link</button>
                {message && <p className="reset-password-message">{message}</p>}
            </form>
        </div>
    );
};

export default ResetPassword;
