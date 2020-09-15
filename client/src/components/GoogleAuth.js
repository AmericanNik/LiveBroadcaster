import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GoogleAuthClientID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      let profile = this.auth.currentUser.get().getBasicProfile();
      // console.log(profile.getId());
      // console.log(profile);
      // console.log(profile.getName());
      let userInfo = {
        userId: profile.NT,
        firstName: profile.tV,
        lastName: profile.uT,
        fullName: profile.Ad,
        googleIcon: profile.TJ,
        email: profile.$t,
      };
      console.log(userInfo);
      this.props.signIn(userInfo);
      // this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className='ui red huge  google button'
        >
          <i className='google icon ' /> Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className='ui red huge google button'
        >
          <i className='google  icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
