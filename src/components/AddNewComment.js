import React, { useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';

const INITIAL_NEW_COMMENT_VALUE = {
	display_name: '',
	body: '',
};

const AddNewComment = (props) => {
	// eslint-disable-next-line no-undef
	const [newComment, setNewComment] = useState(INITIAL_NEW_COMMENT_VALUE);

	const hansleAddComment = (e) => {
		e.preventDefault();
		api()
			.post(`/posts/${props.id}/comments`, newComment)
			.then((response) => {
				props.setCommentsData([...props.commentsData, response.data]);
				setNewComment(INITIAL_NEW_COMMENT_VALUE);
			})
			.catch((error) => console.log(error));
	};

	const handleChange = (e) => {
		setNewComment({ ...newComment, [e.target.name]: e.target.value });
	};

	return (
		<>
			<h3>Add New Comment</h3>
			<form className='ui form' onSubmit={hansleAddComment}>
				<div className='field'>
					<label>Comment Name</label>
					<input
						name='display_name'
						type='text'
						placeholder='add comment name...'
						value={newComment.display_name}
						onChange={handleChange}
					/>
				</div>
				<div className='field'>
					<label>Comment Message</label>
					<textarea
						name='body'
						placeholder='add comment message...'
						rows='3'
						value={newComment.body}
						onChange={handleChange}
						className='field'
					/>
				</div>
				<button type='submit' className='ui inverted green button'>
					Add
				</button>
				<button className='ui inverted violet button' onClick={()=>setNewComment(INITIAL_NEW_COMMENT_VALUE)}>
					Reset
				</button>
				<Link to='/'>
					<button type='submit' className='ui inverted primary button'>
						Back Home
					</button>
				</Link>
			</form>
		</>
	);
};

export default AddNewComment;
