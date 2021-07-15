import { connect } from 'react-redux';
import { fetchProperty} from '../../actions/property_actions';
import PropertyDetail from './property_detail';
import { createReservation } from '../../actions/reservation_actions';
import { updateFilters } from '../../actions/filter_actions';

const mapStateToProps = ({session, entities: { properties, users } }, props) => {
  return {
    currentUser: users[session.id],
    property: properties[props.match.params.propertyId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperty: (id) => dispatch(fetchProperty(id)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(PropertyDetail);
