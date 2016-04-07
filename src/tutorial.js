import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);
