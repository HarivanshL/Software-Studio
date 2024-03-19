//import {useState} from React
import App from '../css-styling/App.css';
import React, { useState } from 'react';
import Member from '../components/Member'
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { getMembers } from '../utilities/users';
import CustomNavbar from '../components/Navbar';


function Members() {

  const [members, setMembers] = useState([]);
  console.log(members);
  useEffect( () => {
  
    async function fetchMembers(){
      try{
      const response = await getMembers();
      if(response.length > 0){
        setMembers(response);
        console.log(response);
      }
      }
      catch(error){
        console.log(error);
      }
    }
    fetchMembers();

  }, []);

  /*
  useEffect(() => {
    console.log(members);
  }, [members]);
*/
  return (
    <>
    <CustomNavbar/>
    <Container>
    {members.length > 0 && members.map((member) => (
          <Member key={member.id} usermodel={member} />
        ))}

    </Container>
    </>
  );
}

export default Members;