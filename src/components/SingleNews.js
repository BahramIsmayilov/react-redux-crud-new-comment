import { api } from '../api';
import React, { useEffect, useState } from 'react';
import AllCommentsList from './AllCommentsList';
import { Link, useParams} from 'react-router-dom';
import DeleteAlertButton from './DeleteAlertButton';

const SingleNews = () => {
	const [activeNewsData, setActiveNewsData] = useState({});
	const { id } = useParams();

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
			<DeleteAlertButton path='/' url={`/posts/${id}`} />
			<div className='ui divider'></div>
			<AllCommentsList />
		</>
	);
};

export default SingleNews;
