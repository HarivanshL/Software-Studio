

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
   fetch('http://localhost:4000/member')
   .then(res => {
    return res.json();
   })
   .then((data) => {
    console.log(data);
    return data;
   });
    
};

module.exports = {
    getMembers
}