import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { clearFilters } from '../../actions/filter_actions';
import SplashNav from './splash_nav';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    currentUser: users[session.id],
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashNav);
