import React, { useState } from 'react'
import { Markup } from 'interweave'

import Layout from '../../layout/main'
import InformationPanel from './informationPanel'
import SchedulePanel from './schedulePanel'
import HistoriesPanel from './historiesPanel'

import {
    IconType
} from 'react-icons'
import {
    MdOutlineMenuOpen,
    MdOutlineEditCalendar,
    MdAccessTime
} from 'react-icons/md'

import {
    Container,
    Content,
    ContentTitle,
    ScriptAttendantContainer,
    ScriptAttendantContent,
    InformationClientContainer,
    InformationClientContent,
    TabulatiosContainer,
    ButtonsContainer,
    Button,
    Sidebar,
    SidebarContent
} from './styles'

const Dashboard: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const [menu, setMenu] = useState('')
    const [popup, setPopup] = useState<boolean>(false)

    const textScriptAttendant = `Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.Atirei o pau no gatis, 
per gatis num morreus.Sapien in monti palavris qui num significa nadis i pareci latim.Mauris nec dolor in eros commodo tempor. 
Aenean aliquam molestie leo, vitae iaculis nisl. https://www.google.com.br

Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

Interagi no mé, cursus quis, vehicula ac nisi.Quem manda na minha terra sou euzis!Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
    `

    const handleOpenAsideContent = (selectMenu: string) => {
        setOpenSideBar(true)
        setMenu(selectMenu)
    }

    const handleOpenUrlBack = (urback: string) => {
        if (urback && !popup) {
            window.open(urback, '_system', 'location=yes')
            setPopup(true)
        }
    }

    const handleFormatScript = (text: string) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g
        return text?.replace(urlRegex, function (url) {
            return '<a href="' + url + '" target="_blank"> ' + url.substring(0, 30) + '</a>'
        })
    }

    const handleCloseAsideContent = () => {
        if (openSideBar) {
            setOpenSideBar(false)
            setMenu(``)
        }
    }


    const variants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    }
    return (
        <Layout>
            <Container>
                <Content
                    onClick={handleCloseAsideContent}
                >
                    <ScriptAttendantContainer>
                        <ContentTitle>Roteiro para orientação do atendente</ContentTitle>
                        <ScriptAttendantContent>
                            <div>
                                <Markup
                                    content={handleFormatScript(textScriptAttendant)}
                                />
                            </div>
                        </ScriptAttendantContent>
                    </ScriptAttendantContainer>
                    <InformationClientContainer>
                        <ContentTitle>Informações da chamada</ContentTitle>
                        <InformationClientContent>
                            <textarea name=""></textarea>
                        </InformationClientContent>

                        <ContentTitle>Informações do contato</ContentTitle>
                        <InformationClientContent>
                            <textarea name=""></textarea>
                        </InformationClientContent>

                        <ContentTitle>Observações do atendente sobre a ligação (opcional)</ContentTitle>
                        <InformationClientContent>
                            <textarea name=""></textarea>
                        </InformationClientContent>
                        <TabulatiosContainer>
                            <div>
                                <label>Qualificação <span>*</span></label>
                                <select>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div>
                                <label>Retornar ligação no dia</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label>Hora</label>
                                <input type="time" />
                            </div>

                        </TabulatiosContainer>
                        <ButtonsContainer>
                            <ButtonComponent
                                backgroundColor='#36AAE2'
                                fontColor='#FFF'
                            >
                                SALVAR
                            </ButtonComponent>
                            <ButtonComponent
                                backgroundColor='#636363'
                                fontColor='#FFF'
                            >
                                BLACK LIST
                            </ButtonComponent>
                            <ButtonComponent>
                                SAIR
                            </ButtonComponent>
                        </ButtonsContainer>
                    </InformationClientContainer>
                </Content>

                <Sidebar>
                    <Menu
                        icon={MdOutlineMenuOpen}
                        active={menu === 'information' ? '#36AAE2' : '#4C4C4C'}
                        action={() => handleOpenAsideContent(`information`)}
                    />
                    <Menu
                        icon={MdOutlineEditCalendar}
                        active={menu === 'schedule' ? '#36AAE2' : '#4C4C4C'}
                        action={() => handleOpenAsideContent(`schedule`)}
                    />
                    <Menu
                        icon={MdAccessTime}
                        active={menu === 'histories' ? '#36AAE2' : '#4C4C4C'}
                        action={() => handleOpenAsideContent(`histories`)}
                    />
                </Sidebar>

                <SidebarContent
                    open={openSideBar}
                    animate={openSideBar ? "open" : "closed"}
                    variants={variants}
                    transition={{ duration: 0.2 }}
                >
                    {menu === 'information' && (
                        <InformationPanel handleCloseAsideContent={handleCloseAsideContent} />
                    )}

                    {menu === 'schedule' && (
                        <SchedulePanel handleCloseAsideContent={handleCloseAsideContent} />
                    )}

                    {menu === 'histories' && (
                        <HistoriesPanel handleCloseAsideContent={handleCloseAsideContent} />
                    )}
                </SidebarContent>
            </Container>
        </Layout>
    )
}
interface IButtonProps {
    backgroundColor?: string;
    fontColor?: string;
}
const ButtonComponent: React.FC<IButtonProps> = ({ backgroundColor, fontColor, children }) => {
    return (
        <Button
            whileTap={{ scale: 0.9 }}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
        >
            {children}
        </Button>
    )
}
interface IMenuProps {
    icon: IconType
    action(): any
    active: string
}
const Menu: React.FC<IMenuProps> = ({ icon: Icon, action, active }) => {
    return (
        <div onClick={action}>
            <Icon size={24} color={active} />
        </div>
    )
}

export default Dashboard