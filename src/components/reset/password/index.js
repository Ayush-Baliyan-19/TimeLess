import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Resetpassword = () => {
    const [credentials, setCredentials] = useState({ password: '', cpassword: '' });
    const [visible, setVisible] = useState({ password: false, cpassword: false });
    const [searchParams] = useSearchParams();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [tokenValid, setTokenValid] = useState(true);

    useEffect(() => {
        document.title = 'Reset Password';
        const token = searchParams.get('token');
        const verify = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/forgot/verify-token`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (res.status !== 200) setTokenValid(false);
        };
        verify();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const toggleVisibility = (field) => {
        setVisible((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const resetpassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (credentials.password !== credentials.cpassword) {
            return setError('Passwords do not match.');
        }

        const token = searchParams.get('token');
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/forgot/reset/password`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ newpass: credentials.password, token: token }),
        });

        if (res.status === 200) {
            setSuccess('Password reset successfully!');
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000); // Redirect after 2 seconds
        } else {
            setError('Failed to reset password. Try again.');
        }
    };

    if (!tokenValid) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded shadow text-center">
                    <h1 className="text-2xl font-bold text-red-500 mb-2">Invalid or Expired Token</h1>
                    <p>Please request a new password reset link.</p>
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
                <form onSubmit={resetpassword} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">New Password</label>
                        <div className="flex items-center border rounded px-2">
                            <input
                                type={visible.password ? 'text' : 'password'}
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="w-full p-2 outline-none"
                                required
                            />
                            <button type="button" onClick={() => toggleVisibility('password')} className="text-sm ml-2 text-blue-500">
                                {visible.password ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <div className="flex items-center border rounded px-2">
                            <input
                                type={visible.cpassword ? 'text' : 'password'}
                                name="cpassword"
                                value={credentials.cpassword}
                                onChange={handleChange}
                                className="w-full p-2 outline-none"
                                required
                            />
                            <button type="button" onClick={() => toggleVisibility('cpassword')} className="text-sm ml-2 text-blue-500">
                                {visible.cpassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Resetpassword;
