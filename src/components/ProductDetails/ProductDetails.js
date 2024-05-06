import { CCardTitle, CImage } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import RatingComponent from 'src/components/SellsCard/Rating/Rating'
import TotalSellsComponent from 'src/components/SellsCard/TotalSells/TotalSells'
import TotalInterestingComponent from 'src/components/SellsCard/Interesting/Interesting'
import 'src/scss/sells.scss'
import ProductFeature from 'src/components/ProductFeature/ProductFeature'
import ProductMaterial from 'src/components/ProductMaterial/ProductMaterial'

const ProductDetails = ({ source, title, tag, paragraph }) => {
  return (
    <>
      {/* product details */}
      <div className="div-modal-header p-3">
        <CImage src={source} alt="Imagem do produto" />
        <div className="div-modal-content">
          <CCardTitle className="card-title-modal">{title}</CCardTitle>
          <button className="btn btn-primary gender-button">{tag}</button>
          <p>{paragraph}</p>
        </div>
      </div>
      {/* charts details */}
      <div className="d-flex component-row align-items-center p-3">
        <div>
          <span className="span-modal">Avaliações</span>
          <RatingComponent rating={10} />
        </div>
        <TotalSellsComponent totalSells={1000} />
        <TotalInterestingComponent totalIntersting="100%" />
        <div className="doughnut-container">
          <Doughnut
            data={{
              datasets: [
                {
                  label: 'My First Dataset',
                  data: '1000',
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
          <div className="chart-percentage">100%</div>
        </div>
      </div>
      <div className="product-descriptions p-3">
        <ProductFeature
          title="Material:"
          description="Kit 3 Calça Jeans Masculina, direto da fabrica, pronta entrega! O kit é enviado com 3 cores de calça diferentes, conforme imagem. Forma das calças pequena, na dúvida sempre"
        />
        <ProductMaterial
          title="Características:"
          description="Jeans · 48 · Cotton Blend · Denim · Elastane · Regular · Regular"
        />
      </div>
    </>
  )
}

ProductDetails.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
}
export default ProductDetails
