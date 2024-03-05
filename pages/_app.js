import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {

  const router = useRouter()
  const unAuthRoutes = ['/auth/login', '/auth/register']
  
  useEffect(() => {
    if (localStorage?.getItem('user')) {
      router.push('/dashboard')
    } else if (!unAuthRoutes.includes(router)) {
      router.push('/auth/login')
    }
    console.log('localStorage?.getItem(user)', localStorage?.getItem('user'), router?.pathname, localStorage?.getItem('user') && unAuthRoutes.includes(router))
  }, [])

  return <Component {...pageProps} />
}
