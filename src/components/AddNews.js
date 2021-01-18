import { api } from '../api';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INITIAL_NEWS_VALUE = {
	title: '',
	content: '',
};

const AddNews = (props) => {
	const [news, setNews] = useState(INITIAL_NEWS_VALUE);
	console.log(props);
	const handleChange = (e) => {
		setNews({ ...news, [e.target.name]: e.target.value });
	};

	const handleClick = () => {
		api()
			.post('/posts', news)
			.then((response) => props.history.push('/'))
			.catch((error) => console.log(error));
	};

	return (
		<>
			<div className='ui form'>
				<h3>Add News</h3>
				<div className='field'>
					<label>News Name</label>
					<input
						type='text'
						name='title'
						value={news.title}
						onChange={handleChange}
						placeholder='News Name...'
					/>
				</div>
				<div className='field'>
					<label>News body</label>
					<textarea
						name='content'
						value={news.content}
						onChange={handleChange}
						placeholder='News body...'
						rows='3'
					></textarea>
				</div>
				<button className='ui inverted violet button' onClick={handleClick}>
					Send
				</button>
				<button className='ui inverted green button' onClick={() => setNews(INITIAL_NEWS_VALUE)}>
					Reset
				</button>
				<Link to='/'>
					<button className='ui inverted primary button'>Back Home</button>
				</Link>
			</div>
		</>
	);
};

export default AddNews;
