import React from 'react';
import CommentList from './CommentList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CommentsListContainer = () => {
	const [allComments, serAllComments] = useState([]);

	useEffect(() => {
		axios.get('https://react-yazi-yorum.herokuapp.com/posts').then((response) => serAllComments(response.data));
	}, []);

	return (
		<div className='ui raised very padded text container segment'>
			<div className='ui relaxed divided list'>
				{allComments && allComments.map((item) => <CommentList comment={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default CommentsListContainer;
