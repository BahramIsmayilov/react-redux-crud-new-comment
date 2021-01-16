import React from 'react';

const CommentList = (props) => {
	return (
		<div className='item'>
			<i className='comment alternate outline icon'></i>
			<div className='content'>
				<a className='header'>{props.comment.content}</a>
				<div className='description'>{props.comment.created_at}</div>
			</div>
		</div>
	);
};

export default CommentList;
