/* eslint-disable @next/next/no-img-element */
import React, { ChangeEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import { IconType } from 'react-icons'
import {
    FiUser,
    FiLock
} from 'react-icons/fi'
import {
    Container,
    Content,
    Form,
    Logo,
    BackgroundImage,
    ButtonSignin,
    Terms,
    Helpme
} from './styles'

const Signin: React.FC = () => {
    const router = useRouter()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const redirectDashboard = (event: any) => {
        event.preventDefault()
        router.push('/app/dashboard')
    }

    return (
        <Container
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 2,
            }}
        >
            <Content>
                <Form>
                    <Logo>
                        <img src="./assets/logo_tallk_signin.svg" alt="Logo circular do tallk-me em azul" />
                    </Logo>
                    <InputGroup
                        name='user'
                        id='user'
                        type='text'
                        title='Usuário'
                        placeholder='Insirá seu usuário'
                        icon={FiUser}
                        value={user}
                        onChange={(event: any) => setUser(event.target.value)}
                    />
                    <InputGroup
                        name='password'
                        id='password'
                        type='password'
                        title='Senha'
                        placeholder='Insirá sua senha'
                        icon={FiLock}
                        value={password}
                        onChange={(event: any) => setPassword(event.target.value)}
                    />
                    <ButtonSignin
                        onClick={redirectDashboard}
                    >
                        Entrar
                    </ButtonSignin>
                    <Helpme>
                        <p>Precisa de ajuda? <a href="">Clique aqui</a></p>
                    </Helpme>
                </Form>
                <Terms>
                    <a href="">Termo de uso</a>
                    <a href="">Política de privacidade</a>
                    <a href="">© Brasil Connect 2022</a>
                </Terms>
            </Content>
            <BackgroundImage>
                <img src="./assets/bg_signin.svg" alt="Logo circular do tallk-me em azul" />
            </BackgroundImage>
        </Container>
    )
}

interface InputGroupProps {
    name: string;
    id: string;
    title: string;
    type: string;
    placeholder: string;
    icon: IconType
    value: string;
    onChange: ChangeEventHandler;
}
const InputGroup: React.FC<InputGroupProps> = ({ id, name, title, type, value, placeholder, icon: Icon, onChange, }) => {
    return (
        <div className="w-4/5">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    className="focus:ring-[#36AAE2]-500 focus:border-[#36AAE2]-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Signin
