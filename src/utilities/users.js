
async function getMembers() {
    const response = await fetch('http://localhost:4000/members', {
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
    
};

module.exports = {
    getMembers
}