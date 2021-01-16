import React from 'react';
import CommentList from './CommentList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CommentsListContainer = (props) => {
	const [allComments, serAllComments] = useState([]);

	useEffect(() => {
		axios
			.get('https://react-yazi-yorum.herokuapp.com/posts')
			.then((response) => {
				serAllComments(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='ui relaxed divided list'>
			{allComments && allComments.map((item) => <CommentList commentData={item} key={item.id} />)}
		</div>
	);
};

export default CommentsListContainer;
