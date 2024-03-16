//import {useState} from React
import App from '../css-styling/App.css';
import React, { useState } from 'react';
import Member from '../components/Member'
import users from '../utilities/users'
import { useEffect, useState } from 'react';

function Members() {

  const [members, setMembers] = useState([]);
  useEffect( () => {
    allUsers = users.getUsers();
    setMembers(allUsers);
  }, []);

  return (
    <>
    <Conatiner>
      {memebers.map(member => {
        <Memmber usermodel = {member} />
      })
    };
    </Conatiner>
    </>
  );
}

export default Members;