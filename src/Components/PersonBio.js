import React from 'react';


const PersonBio = ({ personBioModel }) => {
  console.log(personBioModel);
  return (
    <div className="person-bio">
      <div className="photo-container">
        <img src={personBioModel.image} alt={personBioModel.name} className="photo" />
      </div>
      <div className="name">{personBioModel.name}</div>
      <div className="bio">{personBioModel.bio}</div>
    </div>

  );
  

}

export default PersonBio;