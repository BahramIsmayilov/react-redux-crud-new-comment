import { api } from '../api';
import React, { useEffect, useState } from 'react';
import AllCommentsList from './AllCommentsList';
import { Link } from 'react-router-dom';

const SingleNews = (props) => {
	const [activeNewsData, setActiveNewsData] = useState({});
	const { id } = props.match.params;

	useEffect(() => {
		api()
			.get(`/posts/${id}`)
			.then((response) => {
				setActiveNewsData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<>
			<h2 className='ui header'>{activeNewsData && activeNewsData.title}</h2>
			<p>{activeNewsData && activeNewsData.created_at}</p>
			<p>{activeNewsData && activeNewsData.content}</p>
			<Link to={`/posts/${id}/comments`}>
				<button className='ui inverted green button'>Edit</button>
			</Link>
			<button className='ui inverted red button'>Delete</button>
			<div className='ui divider'></div>
			<AllCommentsList id={id} />
		</>
	);
};

export default SingleNews;
