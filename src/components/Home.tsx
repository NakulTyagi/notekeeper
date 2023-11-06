import { MDBInput, MDBTextArea,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'

function Home() {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');
  const [notes, setNotes] = useState([]);
  const [unpinnedNotes, setunpinnedNotes] = useState([]);
  const [pinnedNotes, setpinnedNotes] = useState([]);
  const [pinned, setpinned] = useState<any>([]);

  useEffect(()=>{
  }, [])

  const handleSubmit = (event) => {
    let noteList:any = notes;
    noteList.push({
      id: noteList.length+1,
      title: title,
      tagline: tagline,
      body: body
    });
    setNotes(noteList);
    setTitle('');
    setBody('');
    setTagline('');
    filterNotes()
    event.preventDefault();
  }

  const filterNotes = (noteId?) =>{
    let pin:any =pinned;
    if(noteId){
      let pin=pinned; 
      pin.push(noteId);
      setpinned(pin);
    }
    // console.log(pin, noteId)
    noteSetting(pin);
  }

  const filterUnpinNotes = (noteId?) =>{
    let pin:any =pinned;
    if(noteId){
      pin=[];
      pinned.forEach((id:any)=>{
        console.log(id, noteId)
        if(id !== noteId){
          pin.push(id);
        }
      }) 
      setpinned(pin);
    }
    noteSetting(pin);
  }

  const noteSetting = (pin) =>{
    let unpin:any = [];
    let pinNotes:any = [];
    notes.forEach((note:any) => {
      if(pin.includes(note.id)){
        pinNotes.push(note);
      }else{
        unpin.push(note)
      }
    });
    console.log(pin,pinNotes, notes,unpin)
    setpinnedNotes(pinNotes);
    setunpinnedNotes(unpin);
  }
            
  return (
    <div style={{position:'relative'}}>
      <div style={{border: '0.5px solid #9FA6B2', width: 'fit-content', borderRadius:12, padding:12}}>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:12, position:'relative'}}>
          <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column', gap:12}}>
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
        {pinnedNotes.map((note:any, index)=>(
        <MDBCard key={index}>
          <MDBCardBody style={{position:'relative'}}>
            <MDBIcon fas icon="minus-circle" onClick={() =>filterUnpinNotes(note.id)} style={{ cursor:"pointer",position:'absolute', top:10, right:10}} />
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

      <div style={{display:'flex', flexWrap:'wrap',gap:20, marginTop:20}}>
        {unpinnedNotes.map((note:any, index)=>(
        <MDBCard key={index}>
          <MDBCardBody style={{position:'relative'}}>
            <MDBIcon fas icon="thumbtack" onClick={() =>filterNotes(note.id)} style={{ cursor:"pointer",position:'absolute', top:10, right:10}} />
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