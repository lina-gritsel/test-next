'use client'

import React, { useState } from 'react'

enum ActiveTabs {
  ALL = 'all',
  IN_PROGRESS = 'progress',
  PENDING = 'work',
  WAITING_TO_START = 'waitingToStart',
  STOPPED = 'stopped',
  FINISHED = 'finished',
  MODERATION = 'moderation',
}

const CampaignStatuses = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabs>(ActiveTabs.ALL)

  return (
    <div className="filter-tabs__scroll scroll-none">
      <ul className="filter-tabs__header flex-auto js-tabs-buttons mb-15 mb-md-2 mb-lg-25">
        <li
          onClick={() => setActiveTab(ActiveTabs.ALL)}
          data-tab="all"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.ALL ? 'active' : ''
          }`}
        >
          Все
        </li>
        <li
          onClick={() => setActiveTab(ActiveTabs.IN_PROGRESS)}
          data-tab="1"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.IN_PROGRESS ? 'active' : ''
          }`}
        >
          В работе
        </li>
        <li
          onClick={() => setActiveTab(ActiveTabs.WAITING_TO_START)}
          data-tab="2"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.WAITING_TO_START ? 'active' : ''
          }`}
        >
          Ожидают начала
        </li>
        <li
          onClick={() => setActiveTab(ActiveTabs.STOPPED)}
          data-tab="3"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.STOPPED ? 'active' : ''
          }`}
        >
          Приостановлены
        </li>
        <li
          onClick={() => setActiveTab(ActiveTabs.MODERATION)}
          data-tab="4"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.MODERATION ? 'active' : ''
          }`}
        >
          На модерации
        </li>
        <li
          onClick={() => setActiveTab(ActiveTabs.FINISHED)}
          data-tab="5"
          className={`filter-tabs__btn-circle ${
            activeTab === ActiveTabs.FINISHED ? 'active' : ''
          }`}
        >
          Завершенные
        </li>
      </ul>
    </div>
  )
}

export default CampaignStatuses
