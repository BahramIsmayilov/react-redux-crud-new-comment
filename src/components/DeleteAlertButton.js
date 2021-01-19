import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { api } from '../api';

const DeleteAlertButton = (props) => {
	const [open, setOpen] = useState(false);

	const handleDelete = () => {
		api()
			.delete(`${props.url}`)
			.then((response) => {
				setOpen(false);
				props.push(props.path);
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Button onClick={() => setOpen(true)} className='ui inverted red button'>
				Delete
			</Button>
			<Modal size='mini' open={open} onClose={() => setOpen(false)}>
				<Modal.Header>Delete This News</Modal.Header>
				<Modal.Content>
					<p>Are you sure you want to delete This News</p>
				</Modal.Content>
				<Modal.Actions>
					<Button negative onClick={() => setOpen(false)}>
						No
					</Button>
					<Button positive onClick={() => handleDelete()}>
						Yes
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default DeleteAlertButton;
