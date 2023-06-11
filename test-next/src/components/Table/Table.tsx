'use client'

import React from 'react'
import { useTable } from './hooks'

interface Campaigns {
  id: number
  title: string
  city: string
  locations: number
  transports: number
  display: string
  budget: number
  photos: string[]
  state: string
}

const Table = () => {
  const { campaigns } = useTable()

  return (
    <div className="table">
      <div className="table__md-wrap">
        <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
          <div className="table__row">
            <div className="table__col">
              <span className="small-xl-text color-sub">Кампания</span>
            </div>
            <div className="table__col widescreen-lg">
              <span className="small-xl-text color-sub">Креативы</span>
            </div>
            <div className="table__col widescreen-lg">
              <span className="small-xl-text color-sub">Место проведения</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Локации</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Транспорт</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Показ</span>
            </div>
            <div className="table__col">
              <span className="small-xl-text color-sub">Бюджет</span>
            </div>
            <div className="table__col"></div>
          </div>
        </div>
        <div className="table__body filter-tabs__content">
          {campaigns &&
            campaigns.map(
              ({
                id,
                title,
                city,
                locations,
                transports,
                display,
                budget,
                photos,
                state,
              }: Campaigns) => (
                <div
                  key={id}
                  className="filter-tabs__item active"
                  data-content={id}
                >
                  <div className="card card--col-8">
                    <div className="card__wrap xxl-center">
                      <div className="card__col first flex-column">
                        <h5 className="medium-text">{title}</h5>
                        <ul className="info-list mb-1 mb-lg-15">
                          <li className="info-list__item">
                            <span className="sub-text">ID 14657</span>
                          </li>
                          <li className="info-list__item">
                            <span className="sub-text">
                              12 янв 2023 в 14:45
                            </span>
                          </li>
                        </ul>
                        <div className="flex-column md-reverse">
                          <div className="status small success">
                            <span className="info-icon img-wrap mr-05">
                              <img
                                src="https://static.biterika.team/brobooster/assets/images/icons/dot-success.svg"
                                alt=""
                              />
                            </span>
                            <span className="small-text">В работе</span>
                          </div>
                          <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">
                            {city}
                          </p>
                        </div>
                      </div>
                      <div className="card__col second widescreen-lg">
                        <p className="medium-text">{city}</p>
                      </div>
                      <div className="card__cols-block mt-1 mt-md-0">
                        <div className="card__row four">
                          <div className="card__row-col flex-column">
                            <span className="small-text tablet-none">
                              Локации
                            </span>
                            <span className="medium-text">{locations}</span>
                          </div>
                          <div className="card__row-col flex-column">
                            <span className="small-text tablet-none">
                              Транспорт
                            </span>
                            <span className="medium-text">{transports}</span>
                          </div>
                          <div className="card__row-col flex-column">
                            <span className="small-text tablet-none">
                              Показ
                            </span>
                            <span className="medium-text">{display} ч</span>
                          </div>
                          <div className="card__row-col flex-column">
                            <span className="small-text tablet-none">
                              Бюджет
                            </span>
                            <span className="medium-text">{budget}$</span>
                          </div>
                        </div>
                      </div>
                      <div className="card__col third flex-auto">
                        <div className="card__img-wrap">
                          {photos.map((photo, index) => (
                            <div
                              key={index}
                              className="card__sm-img card__icon-wrap img-cover"
                            >
                              <img src={photo} alt="card" />
                              <span className="card__icon fixed">
                                <span className="small-icon img-wrap">
                                  <img
                                    src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                                    alt=""
                                  />
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="card__audio flex-row mt-1">
                          <span className="small-icon img-wrap mr-05">
                            <img
                              src="https://static.biterika.team/brobooster/assets/images/icons/sound.svg"
                              alt="sound"
                            />
                          </span>
                          <span className="small-text">Аудио дорожка</span>
                        </div>
                      </div>

                      <div className="card__details-col fixed">
                        <div className="menu-wrap js-menu-wrap">
                          <button
                            type="button"
                            className="btn-more second js-menu-btn"
                          >
                            <svg className="icon icon-small">
                              <use xlinkHref="#more-16">
                                <symbol
                                  fill="none"
                                  viewBox="0 0 16 16"
                                  id="more-16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="2.5"
                                    cy="8"
                                    r="1.5"
                                    fill="currentColor"
                                  ></circle>
                                  <circle
                                    cx="8"
                                    cy="8"
                                    r="1.5"
                                    fill="currentColor"
                                  ></circle>
                                  <circle
                                    cx="13.5"
                                    cy="8"
                                    r="1.5"
                                    fill="currentColor"
                                  ></circle>
                                </symbol>
                              </use>
                            </svg>
                          </button>
                          <div className="menu menu--right js-menu-list">
                            <div className="menu__wrap">
                              <ul>
                                <li>
                                  <a
                                    href="campaing-edit.html"
                                    className="menu__btn"
                                  >
                                    Изменить
                                  </a>
                                </li>
                                <li>
                                  <button type="button" className="menu__btn">
                                    Дублировать
                                  </button>
                                </li>
                                <li>
                                  <a href="support.html" className="menu__btn">
                                    Перейти в поддержку
                                  </a>
                                </li>
                                <li>
                                  <button type="button" className="menu__btn">
                                    Удалить
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <a
                          href="campaing-page.html"
                          className="btn-more second ml-3 ml-lg-4"
                        >
                          <svg className="icon icon-small">
                            <use xlinkHref="#arrow-right-16">
                              <symbol
                                fill="none"
                                viewBox="0 0 16 16"
                                id="arrow-right-16"
                              >
                                <path
                                  d="M5.902 13l5-5-5-5"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </symbol>
                            </use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  )
}

export default Table
