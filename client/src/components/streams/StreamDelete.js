import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
  }

  isUserOwner() {
    if (this.props.auth.userId) {
      console.log('USER!!!' + this.props.auth.userId);
      return (
        <Modal
          title='Delete Stream'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => {
            history.push('/');
          }}
        />
      );
    } else {
      history.push('/');
    }
  }

  render() {
    return <div>{this.isUserOwner()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id], auth: state.auth };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
