import React from 'react'
import { sellsMock } from 'src/Mocks/sells'
import RatingComponent from './Rating/Rating'

const SellsCard = () => {
  return (
    <div>
      <div>
        {sellsMock.map((sell, index) => (
          <React.Fragment key={index}>
            <div className="d-flex mb-5 gap-4">
              <img
                className="rounded"
                src="https://via.placeholder.com/150"
                alt="Imagem do produto"
              />
              <div>
                <button className="btn btn-primary gender-button">Feminino</button>
                <div className="d-flex">
                  <h5 className="card-title me-5">{sell.product}</h5>
                  <RatingComponent />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
export default SellsCard
