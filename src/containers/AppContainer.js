import { connect } from 'react-redux';
import AppWrapper from '../components/AppWrapper';

const AppContainer = connect(

  function mapStateToProps(state) {
    return { editItem: state.cart.get('editItem') };
  },

  function mapDispatchToProps(dispatch) {
    return {
    };
  }
)(AppWrapper);

export default AppContainer;
