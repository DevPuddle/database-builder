document.getElementById('updateButton').addEventListener('click', updateEntry)

async function updateEntry() {
    try {
        const response = await fetch('updateEntry', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: document.getElementsByName('name')[0].value,
                speciesName: getElementsByName('speciesName')[0].value,
                features: getElementsByName('features')[0].value,
                homeworld: getElementsByName('homeworld')[0].value,
                image: getElementsByName('image')[0].value,
                interestingFact: getElementsByName('interestingFact')[0].value,
                notableExamples: getElementsByName('notableExamples')[0].value
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}