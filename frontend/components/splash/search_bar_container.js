import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions'
import SearchBar from './search_bar';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    currentUser: users[session.id],
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
