import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Splash from '../components/screens/splash'


const SplashPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
    /* setInterval(() => {
    }, 10000) */
  }, [])
  return (
    <Splash />
  )
}

export default SplashPage
