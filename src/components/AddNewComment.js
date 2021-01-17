import React, { useState } from 'react';
import axios from 'axios';

const INITIAL_NEW_COMMENT_VALUE = {
	display_name: '',
	body: '',
};

const AddNewComment = (props) => {
	// eslint-disable-next-line no-undef
	const [newComment, setNewComment] = useState(INITIAL_NEW_COMMENT_VALUE);

	const hansleAddComment = (e) => {
		e.preventDefault();
		axios
			.post(`https://react-yazi-yorum.herokuapp.com/posts/${props.id}/comments`, newComment)
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
				<div className='ui mini icon input'>
					<input
						name='display_name'
						type='text'
						placeholder='add comment name...'
						value={newComment.display_name}
						onChange={handleChange}
					/>
				</div>
				<textarea
					name='body'
					placeholder='add comment message...'
					rows='3'
					value={newComment.body}
					onChange={handleChange}
				></textarea>
				<button type='submit' className='ui inverted violet button'>
					Send
				</button>
			</form>
		</>
	);
};

export default AddNewComment;
