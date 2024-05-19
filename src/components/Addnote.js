import React,{useContext,useState} from 'react'
import noteContext from '../contextNotes/noteContext';
const Addnote = (props) => {
    const context = useContext(noteContext);
    const {addNote } = context;
    const[note,setNote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        props.showAlert("Added Sucessfuly",'sucess')
    }
    // ... -> It takes in an iterable (e.g an array) and expands it into individual elements.
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <h3>Add a Blog</h3>
            <form className="my-3">
                <div className="form-group">
                    <label htmlFor="InputTitle">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Title"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="InputDescription">Description</label>
                    <input type="text" className="form-control" id="InputDescription" name="description" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Description"/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputTag">Tag</label>
                    <input type="text" className="form-control" id="InputTag" name="tag" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Purpose"/>
                </div>
                <div className="container my-3">
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </div>

            </form>
        </div>
    )
}

export default Addnote
