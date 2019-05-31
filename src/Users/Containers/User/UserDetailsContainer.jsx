import { connect } from 'react-redux';
import { editUser } from '../../../store/users'
import { UserDetails as UserDetailsComponent } from '../../Components/User';

const mapStateToProps = state => {
  const { user } = state.users;
  return {
    user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editUser: (id) => dispatch(editUser(id)),
  }
}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(UserDetailsComponent);