import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
// import Navbar from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => { console.log('buttonClick')
   dispatch(logout())
}
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
