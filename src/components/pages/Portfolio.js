import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardOverlay, MDBCardImage, MDBCardGroup} from 'mdb-react-ui-kit';
import api from "../../api.jpg"
import stats from "../../stats.png"


export default function Portfolio() {
  return (
    <div class="body">
      <MDBCardGroup>
     
      <MDBCard className="m-3" style={{ width: '45rem', }}>
      <MDBCardImage overlay src={api} alt='...' />
      <MDBCardOverlay>
      <MDBCardBody>
        <MDBCardTitle class="textColorPort">Fantastic 4 fan page</MDBCardTitle>
        <MDBBtn className='mx-4' href='#'>GitHub Repo</MDBBtn>
        <MDBBtn className='mx-4' href='#'>Page Site</MDBBtn>
      </MDBCardBody>
      </MDBCardOverlay>
    </MDBCard>
     
    <MDBCard className="m-3" style={{ width: '45rem' }}>
      <MDBCardImage overlay src={stats} alt='...' />
      <MDBCardOverlay>
      <MDBCardBody>
        <MDBCardTitle class="textColorPort">Stats Tracker</MDBCardTitle>
        <MDBBtn className='mx-4' href='#'>Heroku</MDBBtn>
        <MDBBtn className='mx-4' href='#'>GitHub Repo</MDBBtn>
      </MDBCardBody>
      </MDBCardOverlay>
    </MDBCard>
    
    

    </MDBCardGroup>
    </div>
  );
}
