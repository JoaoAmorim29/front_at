import React from 'react'
import { useRouter } from "next/router";

import {
    IconType
} from 'react-icons'
import {
    MdHome,
    MdEditCalendar,
    MdCheckCircleOutline,
    MdPerson,
    MdHourglassTop
} from 'react-icons/md'
import {
    Container,
    AsideMenu,
} from './styles'


const Aside: React.FC = () => {
    return (
        <Container>
            <AsideMenu>
                <Menu icon={MdHome} path='dashboard' />
                <Menu icon={MdEditCalendar} path='schedules' />
                <Menu icon={MdCheckCircleOutline} path='tasks' />
                <Menu icon={MdPerson} path='clients' />
                <Menu icon={MdHourglassTop} path='histories' />
            </AsideMenu>
        </Container>
    )
}

//*******************************/
interface IMenuProps {
    icon: IconType
    path: string
}
const Menu: React.FC<IMenuProps> = ({icon: Icon, path}) => {
    const router = useRouter();

    const handleClickLink = (link: string) => {
        router.push(link)
    }
    return (
        <div onClick={() => handleClickLink(`/app/${path}`)}>
            <Icon size={24} color={router.pathname == `/app/${path}` ? '#36AAE2' : '#4C4C4C'} style={{cursor: 'pointer'}} />
        </div>
    )
}


export default Aside