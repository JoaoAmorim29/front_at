import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Splash from '../components/screens/splash'


const SplashPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    setInterval(() => {
      router.push('/login')
    }, 10000)
  }, [])
  return (
    <Splash />
  )
}

export default SplashPage
