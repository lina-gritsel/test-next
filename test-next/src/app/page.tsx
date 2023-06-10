import CampaignStatuses from '@/components/CampaignStatuses'
import Filters from '@/components/Filters'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Table from '@/components/Table'

export default function Home() {
  return (
    <div>
      <Header />
      <Filters />
      <Sidebar />
      <CampaignStatuses />
      <Table />
    </div>
  )
}
