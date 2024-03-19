
async function contact(formData) {
    try {
        const response = await fetch('http://localhost:4000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Replace this with your actual data
        });
        if(response.ok){
          const responseData = await response.json();
          console.log("Data sent:", responseData);
          return responseData;
        } else {
          console.error('Failed to send data:', response.statusText);
          return {};
        }
      } catch (error) {
        console.error('Error sending data:', error);
        return {};
      }
};

module.exports = {
    contact
};