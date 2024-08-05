import GenericButton from '../../../Auth/userComponents/GenericButton/GenericButton.jsx'
import * as S from './stylesUserItem.js'
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';


export default function UserItem({item}) {
    const navigate = useNavigate()
    const {id, img, text, pageId }= item;
    const goOn = ()=>{navigate(`/item/${id}`)}
  return (
    <Suspense>
     <S.Card>
      <S.Image src={img} alt='Not found'/>
      <S.Details>
      <S.Content>
      <S.Paragraph>{text}</S.Paragraph>
      </S.Content>
      </S.Details>
     <GenericButton buttonText={'Detalles'} onClick={goOn}/>
      </S.Card>
      </Suspense>
  )
}
