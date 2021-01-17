import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllCommentsList from './AllCommentsList';

const SingleNews = (props) => {
	const [activeNewsData, setActiveNewsData] = useState({});
	const { id } = props.match.params;

	useEffect(() => {
		axios
			.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
			.then((response) => {
				setActiveNewsData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<>
			<h2 className='ui header'>{activeNewsData && activeNewsData.content}</h2>
			<p>{activeNewsData && activeNewsData.created_at}</p>
			<p>{activeNewsData && activeNewsData.title}</p>
			<AllCommentsList id={id} />
		</>
	);
};

export default SingleNews;
