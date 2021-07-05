import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SplashNav from './splash_nav';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    currentUser: users[session.id],
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashNav);
