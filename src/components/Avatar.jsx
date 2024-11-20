import React from 'react';
import HeroAvatar from '../assets/HeroAvatar.png';  // Update the import path

const MyAvatar = () => {
    return (
        <div className="avatar-wrapper">
            <img 
                src={HeroAvatar}
                alt="Saba's Avatar"
                className="avatar-image"
            />
        </div>
    );
};

export default MyAvatar;

// import React from 'react';
// import AvatarImage from '../assets/Avatar.png';  // Import your image

// const MyAvatar = () => {
//     return (
//         <div className="avatar-wrapper">
//             <img 
//                 src={AvatarImage}
//                 alt="Saba's Avatar"
//                 className="avatar-image"
//             />
//         </div>
//     );
// };

// export default MyAvatar;