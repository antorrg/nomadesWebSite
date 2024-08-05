import {useSelector} from 'react-redux'
import UserCard from './UserCard'
import * as S from './styles/Card&Cards'


export default function UsersCards ({infos}) {

  
  return (
    <S.Cardx >
      {infos?.map((info)=>
      <UserCard key={info.id} info={info}/>
      )}
    </S.Cardx>
  )
}
