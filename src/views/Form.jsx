import {useState} from 'react'
import * as Comp from '../Auth/userComponents/AuthIndex'

const Form = () => {
 const [create, setCreate] = useState(false)
 const showModal = () => { setCreate(true)}

 const onClose = ()=>{ setCreate(false)}

  return (
    <div>
      {create?
      <Comp.SignInForm onClose={onClose}/> :
      <Comp.LoginForm showModal={showModal}/>
      }
    </div>
  )
}

export default Form