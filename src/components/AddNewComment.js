import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';

const INITIAL_NEW_COMMENT_VALUE = {
	display_name: '',
	body: '',
};

const AddNewComment = (props) => {
	const [newComment, setNewComment] = useState(
		props.editCemmentId ? props.editCommentData : INITIAL_NEW_COMMENT_VALUE
	);
	console.log(props);
	const hansleAddComment = (e) => {
		e.preventDefault();
		props.editCemmentId
			? api()
					.put(`/posts/${props.id}/comments/${props.editCemmentId}`, newComment)
					.then((response) => {
						props.push(props.path);
						setNewComment(INITIAL_NEW_COMMENT_VALUE);
						props.setEditCommentId(null);
					})
					.catch((error) => console.log(error))
			: api()
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
	useEffect(() => {
		setNewComment(newComment);
	}, [newComment]);
	
	useEffect(() => {
		setNewComment(props.editCommentData);
	}, [props.editCommentData]);


	return (
		<>
			<h3>{props.editCemmentId ? 'Edit New Comment' : 'Add New Comment'}</h3>
			<form className='ui form' onSubmit={hansleAddComment}>
				<div className={`field ${props.editCemmentId && 'disabled'}`}>
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
				{props.editCemmentId ? 'Edit' : 'Add'}
				</button>
				<button className='ui inverted violet button' onClick={() => setNewComment(INITIAL_NEW_COMMENT_VALUE)}>
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
