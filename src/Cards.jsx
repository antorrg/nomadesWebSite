
import Card from './Card'

import style from './Cards.module.css'


export default function Cards ({info}){
    
    
    return(
        <div className={style.cardsContainer}>
        {info?.map((char)=>
        <Card key={char.id} character= {char}/>
        )}
        </div>
    )
}