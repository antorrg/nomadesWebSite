import * as S from './styles/Card&Cards'
import help from './helpers/dataInfo'
import {useNavigate} from 'react-router-dom'

const Card = ({info}) => {
  const navigate = useNavigate()
  const { id, email, image, givenName, nickname, role, country, enable}= info;
 

  const handleClick = ()=>{
    navigate(`/update/${id}?type=user`)
  }
  const title = givenName? givenName : nickname;
  const state = enable? 'Activo': 'Bloqueado'
  const truncEmail = help.adapText(email, 25)
  const asignRoles = help.roles(role)

  return (
    <S.Link onClick={handleClick}>
    <S.Card>
      <S.UserImg src={image} alt='Not found' />
      <S.Details>
      <h3 style={{margin:'0'}}>{title}</h3>
      <S.ContVert>
      <h4 style={{margin:'0'}}>Email:</h4>
      <S.Paragraph style={{margin:'0'}}>{truncEmail}</S.Paragraph>
      </S.ContVert>
      <S.Content>
      <h4 style={{margin:'0'}}>Estado:</h4>
      <S.Paragraph>{state}</S.Paragraph>
      </S.Content>
      <S.Content>
      <h4 style={{margin:'0'}}>Rol:</h4>
      <S.Paragraph>{asignRoles}</S.Paragraph>
      </S.Content>
      <S.Content>
      <h4 style={{margin:'0'}}>Pais:</h4>
      <S.Paragraph>{country}</S.Paragraph>
      </S.Content>
      <h4 style={{margin:'0'}}>{'(Click para editar)'}</h4>
      </S.Details>
    </S.Card>
    </S.Link>
  )
}

export default Card