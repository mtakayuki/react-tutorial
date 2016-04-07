import React from 'react';
import marked from 'marked';

class Comment extends React.Component {
  rawMarkup() {
    return marked(this.props.children.toString(), { sanitize: true });
    // return { _html: rawMarkup };
  }

  render() {
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={{ __html: this.rawMarkup() }} />
        </div>
    );
  }
}
Comment.propTypes = {
  author: React.PropTypes.string,
  children: React.PropTypes.string,
};
export default Comment;
