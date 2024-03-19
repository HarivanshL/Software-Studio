

async function loginUser(FormData){
    try {

        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(FormData), // Replace this with your actual data
        });
        return response;

      } catch (error) {
        console.log(error);
      }
}

module.exports = {
    loginUser
};