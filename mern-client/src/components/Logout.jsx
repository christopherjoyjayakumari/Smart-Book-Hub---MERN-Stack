import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            // Sign-out successful.
            alert('Sign-out successful!');
            navigate('/login', { replace: true }); // Redirect to login page after logout
        } catch (error) {
            // Handle error
            console.error('Logout error:', error);
            // Optionally show an error message to the user
            alert('Error occurred during logout. Please try again.');
        }
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
};

export default Logout;
