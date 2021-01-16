import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = (props) => {
	return (
		<div className='item'>
			<i className='comment alternate outline icon'></i>
			<div className='content'>
				<Link to={`/posts/${props.commentData.id}`} className='header'>
					{props.commentData.content}
				</Link>
				<div className='description'>{props.commentData.created_at}</div>
			</div>
		</div>
	);
};

export default CommentList;
