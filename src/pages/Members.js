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
    /*
    async function fetchMembers(){
      try{
      const allUsers = await getMembers();
      console.log(allUsers);
      setMembers(allUsers);
      console.log(allUsers);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchMembers();
    */
    fetch('http://localhost:4000/member')
    .then(res => {
     return res.json();
    })
    .then((data) => {
     console.log(data);
     setMembers(data);
     console.log(members);
    });

  }, []);

  useEffect(() => {
    console.log(members);
  }, [members]);

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