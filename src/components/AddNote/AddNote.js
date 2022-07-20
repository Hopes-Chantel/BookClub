import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
            // sets limit character, cannot text more than that 
			setNoteText(event.target.value);
            //sets the text to what the user is inputting
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
            // when note is saved, the text will delete from edited note paf
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='10'
				cols='12'
				placeholder='Whatcha thinkin?'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;