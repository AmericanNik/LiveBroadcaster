import React from 'react';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    console.log('Stream ID: ' + this.props.match.params.id);
    return (
      <div>
        {this.props.stream ? (
          <div>
            <h3>Edit A Stream</h3>
            {this.props.stream.title}
            <StreamForm
              initialValues={_.pick(this.props.stream, 'title', 'description')}
              onSubmit={this.onSubmit}
            />
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
