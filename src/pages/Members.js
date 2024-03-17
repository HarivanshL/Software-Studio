//import {useState} from React
import App from '../css-styling/App.css';
import React, { useState } from 'react';
import Member from '../components/Member'
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { getMembers } from '../utilities/users';


function Members() {

  const [members, setMembers] = useState([]);
  useEffect( () => {
    async function fetchMembers(){
      try{
      const allUsers = await getMembers();
      setMembers(allUsers);
      console.log(allUsers);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchMembers();

  }, []);

  return (
    <>
    <Container>
      {members.map(member => {
        <Member usermodel = {member} />
      })
    }
    </Container>
    </>
  );
}

export default Members;