import createUser from './CreateUser'
import loginUser from './LoginUser'
import { verifyPassword, changePassword, onResetPass } from './Password'
import updateUser from './UpdateUser'
import onDeleteUser from './DeletedUser'
import { updateProject } from '../../components/EditionContent/EndpointPages'

export {
  createUser,
  loginUser,
  verifyPassword,
  changePassword,
  onResetPass,
  updateUser,
  onDeleteUser,
  updateProject,
}