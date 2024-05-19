import React, {useContext} from 'react'
import noteContext from '../contextNotes/noteContext';
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 my-3">
      <div className="card" >
      <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
      <p className="card-text">{note.description.substring(0, 100)}...</p>
      <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Sucessfuly",'success')}}></i>
      <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>

  </div>
</div>
    </div>
  )
}

export default NoteItem
