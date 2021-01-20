import React from 'react';
import NewsList from './NewsList';
import { api } from '../api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsListContainer = () => {
	const [allNews, serAllNews] = useState([]);

	useEffect(() => {
		api()
			.get('/posts')
			.then((response) => {
				serAllNews(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='ui relaxed divided list'>
			<div className='ui segment'>
				<Link to='/add-news'>
					<button className='ui inverted primary button'>Add News</button>
				</Link>
			</div>
			{allNews && allNews.map((item) => <NewsList newsData={item} key={item.id} />)}
		</div>
	);
};

export default NewsListContainer;
