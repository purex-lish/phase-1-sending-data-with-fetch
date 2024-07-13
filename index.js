// Add your code here
function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObject)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Assuming the server responds with an object containing the new id
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }
  
  module.exports = { submitData };