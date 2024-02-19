const faker = require('faker');
const data = {
    fullName : faker.name.findName(),
    email : faker.internet.email(),
    currentAddress : faker.address.streetAddress(),
    permanentAddress :faker.address.streetAddress(),
    submitButton : '#submit'
}

export  { data }