import {Suspense} from 'react'
import Card from './Card'
import {Cardx} from './styles/Card&Cards'


const Cards = ({infos, setView}) => {

  
  return (
    <Suspense fallback={<div>Loading...</div>}> 
    <Cardx >
      {infos?.map((info)=>
      <Card key={info.id} info={info} setView= {setView}/>
      )}
    </Cardx>
    </Suspense>
  )
}

export default Cards