import React, {useState, useEffect} from 'react'
import {
    FiBell
} from 'react-icons/fi'
import {
    Container,
    NotificationContainer,
    NotificationTitle,
    ToHead,
    NavigationContainer,
    NavigationLinkButton
} from './styles'

interface IProps {
    isActive: boolean;
}
const NotificationModel: React.FC<IProps> = ({isActive}) => {
    const [navigationLink, setNavigationLink] = useState('all');

    const handleNavigationMenu = (text: string) => {
        if(navigationLink === text) {
            setNavigationLink('all')
        } else {
            setNavigationLink(text)
        }
    }

    return (
        <Container
            isActive={isActive}
        >
            <NotificationContainer>
                <NotificationTitle>
                    <FiBell 
                        size={24} 
                        color='#005178' 
                        cursor='pointer'
                    />
                    <span>Notificações</span>
                </NotificationTitle>
                <ToHead>marcar todas como lida</ToHead>
            </NotificationContainer>
            <NavigationContainer>
               <NavigationLinkButton
                    onClick={() => handleNavigationMenu('all')}
                    isActive={navigationLink === 'all' ? true : false}
               >
                   Todas
               </NavigationLinkButton>
               <NavigationLinkButton
                    onClick={() => handleNavigationMenu('calls')}
                    isActive={navigationLink === 'calls' ? true : false}
               >
                   Ligações
               </NavigationLinkButton>
               <NavigationLinkButton
                    onClick={() => handleNavigationMenu('mensage')}
                    isActive={navigationLink === 'mensage' ? true : false}
               >
                   Mensagens
               </NavigationLinkButton>
               <NavigationLinkButton
                    onClick={() => handleNavigationMenu('alert')}
                    isActive={navigationLink === 'alert' ? true : false}
               >
                   Alerta
               </NavigationLinkButton>
            </NavigationContainer>
        </Container>
    )
}

export {NotificationModel}