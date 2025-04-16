import React, { useState } from 'react';

const AccountCreation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pass: '',
        confirmPass: '',
        key: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.pass !== formData.confirmPass) {
            alert('Passwords do not match!');
            return;
        }

        // Prepare request body
        const requestBody = {
            name: formData.name,
            email: formData.email,
            pass: formData.pass,
            key: process.env.REACT_APP_KEY,
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/register/email/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Account created successfully!');
                console.log('Server response:', result);
            } else {
                alert(`Error: ${result.message}`);
                console.error('Server error:', result);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="pass"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass"
                            name="pass"
                            value={formData.pass}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPass"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPass"
                            name="confirmPass"
                            value={formData.confirmPass}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!formData.name || !formData.email || !formData.pass || !formData.confirmPass}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountCreation;