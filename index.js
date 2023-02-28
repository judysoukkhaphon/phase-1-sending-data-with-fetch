// This is my code that doesn't use arrow functions. 
// I tried to write the equivalent of the code along but am not getting the same test results
/* 
function submitData(name, email) {

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
            .then(function (response) {
                return response.json();
            })
                .then(function (object) {
                   return object.document.body.innerHTML = `<p>${response.id}</p>`

                })
                    .catch(function (error) {
                        console.log("error", error);
                        return (document.body.innerHTML = `<p>${error.message}</p>`);
                    })
                    
}
*/


/*From video code along, https://www.youtube.com/watch?v=9d7Hj5FT7NE */

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(response => {
        document.body.innerHTML = `<p>${response.id}</p>`
    })
    .catch(error => {
        console.log("error", error)
        document.body.innerHTML = `<p>${error.message}</p>`
    })

}






