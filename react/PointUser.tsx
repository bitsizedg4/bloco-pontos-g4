import React,{ FC } from 'react';
import { useCssHandles } from 'vtex.css-handles';

import axios from 'axios';

const api = axios.create({
  baseURL: '/',
});

const CSS_HANDLES = ['pointUser'] as const

const PointUser: FC = () => {

  const [points, setPoints] = React.useState<number | undefined>();

  React.useEffect(() => {
    const time = new Date().getTime();

    api.get(`/_v/get-points?time=${time}`).then((r: any) => {
      setPoints(r.data.points);
    })
  }, []);
  
  const handles = useCssHandles(CSS_HANDLES) 

  return (
    <div className= {`${handles.pointUser} c-action-secondary bg-action-primary db tc br3 mw4 pa1 ml9 mt7`} >
      <h4 className='pa1'>{points || 0} pontos</h4>
    </div>
  )
}

export default PointUser
