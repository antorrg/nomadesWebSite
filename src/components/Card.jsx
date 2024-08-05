//import {Card, Logo, Image, Details, Content, Paragraph} from './styles/Card&Cards'
import * as S from './styles/Card&Cards'
import GenericButton from '../Auth/userComponents/GenericButton/GenericButton';
import {useNavigate} from 'react-router-dom'

const Card = ({info, setView}) => {
  const navigate = useNavigate()
  const { id, title, logo, landing, infoHeader}= info;
  //console.log('estoy en card: ', infoBody);
  const handleClick = ()=>{
    navigate(`/home/${id}`)
  }

  return (
    <S.Link onClick={handleClick}>
    <S.Card>
      <S.Logo src={logo} alt='Not found'/>
      <S.Image src={landing} alt='Not found' />
      <S.Details>
      <h3 style={{margin:'0'}}>{title}</h3>
      <S.Content>
      <h4 style={{margin:'0'}}>Header:</h4>
      <S.Paragraph>{infoHeader}</S.Paragraph>
      </S.Content>
      </S.Details>
    </S.Card>
    </S.Link>
  )
}

export default Card