// Add your code here
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






