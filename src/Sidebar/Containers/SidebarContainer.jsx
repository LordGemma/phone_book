import { connect } from 'react-redux';
import { getUser } from '../../store/users'
import { default as SidebarComponent } from '../Components'

const mapStateToProps = state => {
  const { users, user } = state.users;
  return {
    users,
    user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: (id) => dispatch(getUser(id)),
  }
}

export const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);