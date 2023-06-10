import CampaignStatuses from '@/components/CampaignStatuses'
import Filters from '@/components/Filters'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Table from '@/components/Table'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main flex-column">
        <section className="lk-section flex-column flex-auto">
          <div className="container flex-column flex-auto">
            <div className="lk-wrapper full">
              <Filters />
              <div className="lk-content flex-column flex-auto">
                <Sidebar />
                <div className="filter-tabs js-tabs mt-2 mt-lg-25">
                  <CampaignStatuses />
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
