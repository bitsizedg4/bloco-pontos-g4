import React,{ FC } from 'react'
import { useCssHandles } from 'vtex.css-handles';


const CSS_HANDLES = ['pointUser'] as const
const PointUser: FC = () => {
  
  const handles = useCssHandles(CSS_HANDLES) 
  return (
    <div className= {`${handles.pointUser} c-action-secondary bg-action-primary db tc br3 mw4 pa1 ml9 mt7`} >
      <h4 className='pa1'>{} pontos</h4>
    </div>
    
  )
}

export default PointUser
