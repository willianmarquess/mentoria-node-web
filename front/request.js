async function main() {
    try {

        const obj = {
            name: 'mentoria-express'
        };

        await fetch('http://localhost:3333/cod',  {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        });

    } catch (error) {
        console.log(error);
    }
}

main();

// async function main() {
//     try {
//         const result = await fetch('http://localhost:3333/names');
//         const json = await result.json();
//         const body = document.getElementById('body')

//         json.forEach(elem => {
//             body.innerHTML += `<p>${elem.name}</p>`
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();

