import React from 'react'
import { sellsMock } from 'src/Mocks/sells'
import RatingComponent from './Rating/Rating'
import TotalSellsComponent from './TotalSells/TotalSells'
import TotalInterestingComponent from './Interesting/Interesting'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, DoughnutController } from 'chart.js'

import '../../scss/sells.scss'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
ChartJS.register(DoughnutController, ArcElement)

const SellsCard = () => {
  return (
    <>
      {sellsMock.map((sell, index) => (
        <React.Fragment key={index}>
          <div className="d-flex mb-5 gap-4">
            <img
              className="rounded"
              src="https://via.placeholder.com/150"
              alt="Imagem do produto"
            />
            <div className="components-content">
              <button className="btn btn-primary gender-button">{sell.tag}</button>
              <div className="d-flex component-row align-items-center">
                <h5 className="card-title me-5 font-weight-bold">{sell.product}</h5>
                <RatingComponent rating={sell.rating} />
                <TotalSellsComponent totalSells={sell.totalSells} />
                <TotalInterestingComponent totalIntersting={sell.interestings} />
                <div className="doughnut-container">
                  <Doughnut
                    data={{
                      datasets: [
                        {
                          label: 'My First Dataset',
                          data: [sell.totalSells],
                          backgroundColor: ['#4d44b5'],
                          hoverBackgroundColor: ['#36A2EB'],
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                      layout: {
                        padding: 0,
                      },
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                    height={80}
                    width={80}
                  />
                  <div className="chart-percentage">{sell.interestings}</div>
                </div>
                <CDropdown className="CDropdow-component">
                  <CDropdownToggle className="custom-dropdown-toggle" caret={false}>
                    ...
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem as="button">Excluir</CDropdownItem>
                    <CDropdownItem as="button">Editar</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}
export default SellsCard
