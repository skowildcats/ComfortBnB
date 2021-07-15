import { connect } from 'react-redux';
import { fetchProperty} from '../../actions/property_actions';
import PropertyDetail from './property_detail';
import { createReservation } from '../../actions/reservation_actions';
import { addError, clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({session, errors, entities: { properties, users } }, props) => {
  return {
    currentUser: users[session.id],
    property: properties[props.match.params.propertyId],
    errors: errors.reservation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperty: (id) => dispatch(fetchProperty(id)),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    addError: (error) => dispatch(addError(error)),
    clearErrors: () => dispatch(clearErrors()),
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(PropertyDetail);
