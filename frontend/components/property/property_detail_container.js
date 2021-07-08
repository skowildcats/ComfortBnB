import { connect } from 'react-redux';
import { fetchProperty } from '../../actions/property_actions';
import PropertyDetail from './property_detail';

const mapStateToProps = ({ entities: { properties } }, props) => {
  return {
    property: properties[props.match.params.propertyId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperty: (id) => dispatch(fetchProperty(id))
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(PropertyDetail);
