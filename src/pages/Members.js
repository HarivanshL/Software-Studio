//import {useState} from React
import App from '../css-styling/App.css';
import React, { useState } from 'react';
import Member from '../components/Member'
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { getMembers } from '../utilities/users';


function Members() {

  const [members, setMembers] = useState([]);
  console.log(members);
  useEffect( () => {
  
    async function fetchMembers(){
      try{
      const allUsers = await getMembers();
      setMembers(allUsers);
      console.log(members);
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
    <Container>
      {members.map((member) => {
        return <Member usermodel = {member} />
      })
    }
    </Container>
    </>
  );
}

export default Members;