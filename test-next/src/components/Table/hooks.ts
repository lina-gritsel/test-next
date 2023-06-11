'use client'

import { getAllInfo } from '../../api/requests'
import { useEffect, useState } from 'react'

export const useTable = () => {
  const [campaigns, setCampaigns] = useState<any>([])
  const [isLoading, setIsLoanding] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllInfo()

        setCampaigns(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoanding(false)
      }
    })()
  }, [])

  return {
    campaigns: campaigns.campaigns || [],
    isLoading,
  }
}
