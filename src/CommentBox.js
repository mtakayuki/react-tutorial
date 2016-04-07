import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {
  render() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data} />
          <CommentForm />
        </div>
    );
  }
}
CommentBox.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object),
};
export default CommentBox;
