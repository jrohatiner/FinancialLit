import React, { useState } from 'react';
        import { resetPassword } from '../mockApi';
        import './ResetPassword.css';

        const ResetPassword: React.FC = () => {
          const [email, setEmail] = useState('');
          const [message, setMessage] = useState('');

          const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const success = resetPassword(email);
            setMessage(success ? 'Password reset email sent' : 'Error sending password reset email');
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
