import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const verifyLogin = () => {
        const request = indexedDB.open('GymDB', 1);
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction('users', 'readonly');
            const store = transaction.objectStore('users');
            const getUser = store.get(credentials.username);

            getUser.onsuccess = () => {
                if (getUser.result && getUser.result.password === credentials.password) {
                    navigate('/dashboard');
                } else {
                    setError('Invalid username or password');
                }
            };

            getUser.onerror = () => {
                setError('User not found!');
            };
        };
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#111',
            color: '#fff'
        }}>
            <div style={{
                width: '350px',
                background: '#222',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 0 15px rgba(255, 255, 0, 0.6)',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#faff00',
                    fontSize: '24px',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>Member Login</h2>
                <form onSubmit={(e) => { e.preventDefault(); verifyLogin(); }}>
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#faff00' }}>Username:</label>
                        <input type="text" name="username" value={credentials.username} onChange={handleChange} required 
                               style={{ width: '100%', padding: '10px', border: '1px solid #faff00', borderRadius: '5px', fontSize: '16px', background: '#333', color: '#fff' }} />
                    </div>
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#faff00' }}>Password:</label>
                        <input type="password" name="password" value={credentials.password} onChange={handleChange} required 
                               style={{ width: '100%', padding: '10px', border: '1px solid #faff00', borderRadius: '5px', fontSize: '16px', background: '#333', color: '#fff' }} />
                    </div>
                    {error && <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</p>}
                    <button type="submit" style={{ width: '100%', padding: '12px', background: '#faff00', color: 'black', border: 'none', borderRadius: '5px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s' }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
