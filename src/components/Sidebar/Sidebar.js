import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import "./Sidebar.css";
 
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow 
            src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/244199283_1526325901048202_9050207794314995325_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wEQgMmQQhfgAX-eBNTx&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT_rO34DwFGQ8xYgLnuAiVAG2gTTEmleUQL6_pG71fjlQg&oe=61E5144E"
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