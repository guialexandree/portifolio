import { useState, useEffect } from 'react'

const MOBILE_WIDHT = 600

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDHT)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDHT)
    };

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? 'mobile' : 'desktop'
};

export default useDeviceType
