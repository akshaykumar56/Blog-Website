import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import noteContext from '../contextNotes/noteContext';

export default function BlogPage(props) {
  const context = useContext(noteContext);
  const { getNoteAll, allNotes } = context;
  const navigate = useNavigate(); // Get navigate function

  useEffect(() => {
    getNoteAll();
  }, []);

  const handleClick = (id) => {
    // Navigate to a new location with the 'id' as a search parameter
    navigate(`/blog/${id}`);
  };

  return (
    <div className='container'>
      <div>
        <h1>All Blogs</h1>
      </div>
      {allNotes.map((element) => {
        return (
          <div style={{border:'1px solid black',margin:'10px 0px',padding:'5px',borderRadius:'5px',cursor:'pointer'}} key={element._id} onClick={() => handleClick(element._id)}>
            <div style={{fontWeight:'600',fontSize:'18px'}}>{element.title}</div>
            <div>{element.tag}</div>
          </div>
        );
      })}
    </div>
  );
}
