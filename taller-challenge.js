function fillForm() {
    const fullName = document.querySelector('#userName')
    const email = document.querySelector('#userEmail')
    const currentAddress = document.querySelector('#currentAddress')
    const permanentAddress = document.querySelector('#permanentAddress')
    const submitButton = document.querySelector('#submit')

    fullName.value = 'John Doe'
    email.value = "john.doe@example.com"
    currentAddress.value = '123 main st'
    permanentAddress.value = '456 secondary st'
    submitButton.click()
}

async function sendRequest() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
}