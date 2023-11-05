import { MDBInput, MDBTextArea,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn

} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'

function Home() {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(()=>{

  }, [notes])

  const handleSubmit = (event) => {
    let noteList:any = notes;
    noteList.push({
      title: title,
      tagline: tagline,
      body: body
    });
    console.log(noteList, notes)
    setNotes(noteList);
    setTitle('');
    setBody('');
    setTagline('');
    event.preventDefault();
  }
            
  return (
    <div style={{position:'relative'}}>
      <div style={{border: '0.5px solid #9FA6B2', width: 'fit-content', borderRadius:12, padding:12}}>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:12, position:'relative'}}>
          <div style={{display:'flex',flexWrap:'wrap', flexDirection:'column', gap:12}}>
            <MDBInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label='Title'
              id='title'
              type='text'
            />
            <MDBInput
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              label='Tagline'
              id='tagline'
              type='text'
            />
          </div>
          <div style={{display:'flex', flexDirection:'column' , gap:12}}>
            <MDBTextArea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              label="Body"
              rows={3}
              id='body'
            />
          </div>
          <MDBBtn type="submit" value="Submit" >Submit</MDBBtn>
        </form>
      </div>

      <div style={{display:'flex', flexWrap:'wrap',gap:20, marginTop:20}}>
        {notes.map((note:any, index)=>(
        <MDBCard key={index}>
          <MDBCardBody>
            <MDBCardTitle> {note.title}</MDBCardTitle>
            <MDBCardText>
              {note.tagline}
            </MDBCardText>
            <MDBCardText>
              {note.body}
            </MDBCardText>
            <MDBBtn>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        ))}
      </div>
    </div>
  )
}

export default Home