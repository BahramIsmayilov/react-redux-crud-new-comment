import React from 'react';
import NewsList from './NewsList';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewsListContainer = (props) => {
	const [allNews, serAllNews] = useState([]);

	useEffect(() => {
		axios
			.get('https://react-yazi-yorum.herokuapp.com/posts')
			.then((response) => {
				serAllNews(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='ui relaxed divided list'>
			{allNews && allNews.map((item) => <NewsList newsData={item} key={item.id} />)}
		</div>
	);
};

export default NewsListContainer;
