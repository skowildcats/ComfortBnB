import { connect } from 'react-redux';
import BrowsePage from './browse_page';
import { fetchProperties } from '../../actions/property_actions';

const mapStateToProps = ({ entities: { properties }, ui: { filters } }) => {
  return {
    filters: filters,
    properties: Object.values(properties)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: (filters) => dispatch(fetchProperties(filters))
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(BrowsePage);
