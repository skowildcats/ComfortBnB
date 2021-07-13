import { connect } from 'react-redux';
import TripView from './trip_view';
import {fetchUser} from '../../actions/session_actions'
import { fetchProperties } from '../../actions/property_actions';
import { destroyReservation } from '../../actions/reservation_actions';

const mapStateToProps = ({ session, entities: { users, properties, reservations }, ui: { filters }}) => {
  return {
    filters: filters,
    currentUser: users[session.id],
    properties: properties,
    reservations: reservations,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchProperties: (filters) => dispatch(fetchProperties(filters)),
    destroyReservation: (id) => dispatch(destroyReservation(id))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(TripView);
