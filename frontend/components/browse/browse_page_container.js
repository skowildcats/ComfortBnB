import { connect } from 'react-redux';
import BrowsePage from './browse_page';
import { fetchProperties } from '../../actions/property_actions';

const mapStateToProps = ({ entities: { properties } }) => {
  return {
    properties: Object.values(properties)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: () => dispatch(fetchProperties())
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(BrowsePage);
