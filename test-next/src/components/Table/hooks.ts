import { useQuery } from '@tanstack/react-query'
import { getAllInfo } from '../../api/requests'

export const useTable = () => {
  const { data, isLoading, isFetching } = useQuery(
    ['getAllInfo'],
    () => getAllInfo(),
    { refetchOnWindowFocus: false, staleTime: 60_000 },
  )

  return {data, loading: isLoading || isFetching}
}
