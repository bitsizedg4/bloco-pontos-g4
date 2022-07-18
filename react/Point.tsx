import React,{ FC } from 'react'
import { useCssHandles } from 'vtex.css-handles';
import { useProduct } from 'vtex.product-context';

const CSS_HANDLES = ['pointCount'] as const

const Point: FC = () => {
  const productContextValue = useProduct()
  const handles = useCssHandles(CSS_HANDLES) 
  return (
    <div className= {`${handles.pointCount} c-action-secondary bg-success db tc br3`} >
      <h4 className='pa2'>Compre e ganhe {productContextValue?.product?.priceRange.sellingPrice.highPrice.toFixed()} pontos</h4>
    </div>
    
  )
}



export default Point
