import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import "./Sidebar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
 
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow 
            src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/121630630_1276658492681612_8961900382755672641_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=L5ilCg5PgM8AX9MLYQN&_nc_ht=scontent.fdac99-1.fna&oh=2b338fa11654117bc290ae2da8984ea2&oe=601FB24D"
            title="Tanvir Anjum Labir"
            />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"></SidebarRow>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"></SidebarRow>
            <SidebarRow Icon={PeopleIcon} title="Friends"></SidebarRow>
            <SidebarRow Icon={ChatIcon} title="Messenger"></SidebarRow>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"></SidebarRow>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"></SidebarRow>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"></SidebarRow>
        </div>
    );
};

export default Sidebar;