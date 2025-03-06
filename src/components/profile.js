import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../Redux/actions';
import '../Profile.css';

const Profile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        dispatch(getAuth());

        
        const savedProfileImage = localStorage.getItem('profileImage');
        if (savedProfileImage) {
            setProfileImage(savedProfileImage);
        }
    }, [dispatch]);

    const handleProfileImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);

            // Save the image URL to localStorage
            localStorage.setItem('profileImage', imageUrl);
        }
    };

    // Define the placeholder image URL
    const placeholderImage = "";

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-picture">
                    {/* Display placeholder if no profile image is uploaded */}
                    <img 
                        src="https://avatar.iran.liara.run/public/boy?username=Ash "
                        alt="Profile" 
                    />
                </div>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleProfileImageUpload} 
                    className="upload-btn"
                />
                {user && (
                    <div className="user-info">
                        <h1>{user.fullName}</h1>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
