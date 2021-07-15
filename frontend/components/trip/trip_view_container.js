import { connect } from 'react-redux';
import TripView from './trip_view';
import {fetchUser} from '../../actions/session_actions'
import { fetchProperties, fetchAllProperties } from '../../actions/property_actions';
import { destroyReservation } from '../../actions/reservation_actions';

const mapStateToProps = ({ session, entities: { users, properties }, ui: { filters }}) => {
  return {
    filters: filters,
    currentUser: users[session.id],
    properties: properties,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchProperties: (filters) => dispatch(fetchProperties(filters)),
    destroyReservation: (id) => dispatch(destroyReservation(id)),
    fetchAllProperties: () => dispatch(fetchAllProperties())
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(TripView);
