import { connect } from 'react-redux';
import BrowsePage from './browse_page';
import { fetchProperties } from '../../actions/property_actions';

const mapStateToProps = ({ entities: { properties }, ui: { filters } }) => {
  return {
    filters: filters,
    properties: Object.values(properties),
    mapSettings: {
    "New York": { cords: [40.76, -73.98], zoom: 14 },
    "Chicago": { cords: [41.8821009, -87.6377712], zoom: 14},
    "San Francisco": { cords: [37.7711514, -122.4260304], zoom: 13 },
    "Los Angeles": { cords: [34.0450184, -118.3421892], zoom: 11 }},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProperties: (filters) => dispatch(fetchProperties(filters))
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps)(BrowsePage);
