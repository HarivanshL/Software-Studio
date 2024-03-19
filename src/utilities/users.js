const { responsivePropType } = require("react-bootstrap/esm/createUtilityClasses");


async function getMembers() {
/*
    const response = await fetch('http://localhost:4000/member', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    if(response.ok){
        console.log(response.body);
        return response.body;
    }
    else{
        console.log("failed to grab member list");
        return [];
    }
    */
   try{
    const response = await fetch('http://localhost:4000/member');
   
   if(response.ok){
    console.log("successfully pulled members")
    const responseData = await response.json();
    return responseData;
   }
   else{
    console.log("Failed to pull members");
   }
  }
   catch(error){
    console.log(error);
   }

    
};

module.exports = {
    getMembers
}