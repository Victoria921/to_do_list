import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import './Create.css';
import Home from './Home.js';

export default function Create({ update }) {
	let [title, setTitle] = useState("");
	let [date, setDate] = useState("");
	let [description, setDescription] = useState("");

	const SaveCreate = (e) => {
		const task = { title, date, description };
		console.log(task);
		e.preventDefault();
		update(<Home update={update} _task={task} />);
	};


	return (
		// <>
		<main className='create-main'>
			<form>
				<div className='create-h1'>
					<h1 >Create a task</h1>
				</div>
				<div className='create-div'>
					<div className='create-div-title-date'>
						<div className='create-title-div'>
							<label htmlFor='title'>Title :</label>
							<input id='title' className='create-title-input' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
						</div>
						<div className='create-date-div'>
							<label htmlFor='date'>Due Date : </label>
							<input id='date' className='create-date-input' type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
						</div>

					</div>
					<div className='create-description-div'>
						<label htmlFor='desc'>Description : </label>
						<textarea id='desc' type="text" rows="5" value={description} onChange={(e) => { setDescription(e.target.value) }} />
					</div>
					<div className='create-buttons-div'>
						<button type='button' className='create-btn-cancel' onClick={()=>{update(<Home update={update} />)}}>Cancel</button>
						<button type='submit' value='Create Task' className='create-btn-create' onClick={SaveCreate}>Create</button>
					</div>

				</div>

			</form>

		</main>
		// </>
	)
}