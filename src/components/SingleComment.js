import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleComment = (props) => {
	const [activeCommentData, setActiveCommentData] = useState({});
	const { id } = props.match.params;

	useEffect(() => {
		axios
			.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
			.then((response) => {
				setActiveCommentData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h2 className='ui header'>{activeCommentData && activeCommentData.content}</h2>
			<p>{activeCommentData && activeCommentData.created_at}</p>
			<p>{activeCommentData && activeCommentData.title}</p>
		</>
	);
};

export default SingleComment;
