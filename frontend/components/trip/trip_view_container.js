import { connect } from 'react-redux';
import TripView from './trip_view';
import {fetchUser} from '../../actions/session_actions'
import { fetchProperties } from '../../actions/property_actions';

const mapStateToProps = ({ session, entities: { users, properties }, ui: { filters }}) => {
  return {
    filters: filters,
    currentUser: users[session.id],
    properties: properties
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchProperties: (filters) => dispatch(fetchProperties(filters))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(TripView);
