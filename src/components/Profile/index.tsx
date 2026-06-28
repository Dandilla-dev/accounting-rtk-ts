import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";

const Profile = () => {
    const handleClickLogout =() => {
        // TODO Implement logout func
        alert('Logout clicked');
    }
    return (
        <div>
            <ProfileData/>
            <button onClick={handleClickLogout}>LogOut</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;