import React from 'react'

const Sidebar = () => {
  return (
    <>
      <h1 className="section-title mr-25 js-title">Кампании</h1>
      <a href="new-campaing.html" className="btn-main desktop-none ml-auto">
        <svg className="icon icon-medium">
          <use xlinkHref="#add-24"></use>
        </svg>
      </a>
    </>
  )
}

export default Sidebar
