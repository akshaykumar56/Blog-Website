import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import noteContext from '../contextNotes/noteContext';

export default function BlogPage() {
  const context = useContext(noteContext);
  const { note, getOneNote } = context;
  const { id } = useParams(); 

  useEffect(() => {
    getOneNote(id); 
  }, [id]); 

  console.log(note);

  return (
    <div className='container'>
      {note.map((element) => {
        return (
          <div key={element._id}>
            <div style={{fontSize:'700',fontSize:'25px'}}>{element.title}</div>
            <div dangerouslySetInnerHTML={{ __html: element.description }} />
          </div>
        );
      })}
    </div>
  );
}
