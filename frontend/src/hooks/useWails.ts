import { useState, useEffect } from 'react'

export interface WailsInfo {
  platform: string
  version: string
  isReady: boolean
}

export function useWails() {
  const [info, setInfo] = useState<WailsInfo>({
    platform: 'web',
    version: '1.0.0',
    isReady: false
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).wails) {
      setInfo({
        platform: 'desktop',
        version: '1.0.1',
        isReady: true
      })
    } else {
      setInfo(prev => ({ ...prev, isReady: true }))
    }
  }, [])

  return info
}
