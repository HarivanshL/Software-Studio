//import {useState} from React
import App from '../css-styling/App.css';
import React, { useState } from 'react';
import Member from '../components/Member'
import users from '../utilities/users'
import { useEffect, useState } from 'react';

function Members() {

  const [members, setMembers] = useState([]);
  useEffect( () => {
    const allUsers = users.getMembers();
    setMembers(allUsers);
  }, []);

  return (
    <>
    <Conatiner>
      {members.map(member => {
        <Member usermodel = {member} />
      })
    };
    </Conatiner>
    </>
  );
}

export default Members;