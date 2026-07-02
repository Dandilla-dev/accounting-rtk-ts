import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {clearToken} from "../../features/token/tokenSlice.ts";
import {clearUser} from "../../features/user/userSlice.ts";

const Profile = () => {
    const dispatch = useAppDispatch();
    const handleClickLogout =() => {
        dispatch(clearToken());
        dispatch(clearUser());
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