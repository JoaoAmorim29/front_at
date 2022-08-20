
import React, {useState} from 'react'
import Image from 'next/image';
import LogoTallk from '../../../../public/assets/logo_tallk.svg'

import { 
    FiMenu,
    FiBell,
    FiSun

 } from "react-icons/fi";
import {
    Container, 
    GroupIcons,
    Notification,
    Avatar,
} from './styles'
import { UserMenuModel } from './user-menu';
import { NotificationModel } from './notification';
const Header: React.FC = () => {
    const [userModel, setUserModel] = useState(false)
    const [notificationModel, setNotificationModel] = useState(false)

    const handleActiveUserModel = () => {
        setUserModel(!userModel)
        setNotificationModel(false)
    }

    const handleActiveNotificationModel = () => {
        setNotificationModel(!notificationModel)
        setUserModel(false)
    }
    return (
        <Container>
            <GroupIcons>
                <FiMenu size={24} color="#fff" style={{ cursor: 'pointer', marginRight: '3rem' }} />
                <Image src={LogoTallk} alt="Tallk-me"  />
            </GroupIcons>

            <GroupIcons>
                <Notification
                    onClick={handleActiveNotificationModel}
                >
                    <FiBell size={24} color="#fff" style={{ cursor: 'pointer',}}/>
                    <div />
                </Notification>
                <Avatar>
                    <span>Rai L.</span>
                    <div onClick={handleActiveUserModel}>

                    </div>
                </Avatar>
                <FiSun size={24} color="#fff" style={{ cursor: 'pointer', marginLeft: '0.8rem' }} />
            </GroupIcons>

           <UserMenuModel 
                isActive={userModel}
           />

           <NotificationModel 
                isActive={notificationModel}
           />
        </Container>
    )
}

export default Header;