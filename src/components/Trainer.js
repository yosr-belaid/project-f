import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoach } from '../Redux/actions';  

const Trainer = () => {
    const user = useSelector(state => state.user);  
    const dispatch = useDispatch();
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        dispatch(getCoach());

        // Check if there is a saved coach profile image in localStorage
        const savedProfileImage = localStorage.getItem('coachProfileImage');
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
            localStorage.setItem('coachProfileImage', imageUrl);
        }
    };

    // Define the placeholder image URL for the coach
    const placeholderImage = "https://avatar.iran.liara.run/public/boy?username=Ash";

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-picture">
                    {/* Use the uploaded image or the placeholder */}
                    <img src={profileImage || placeholderImage} alt="Coach Profile" />
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
                        <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Trainer;
