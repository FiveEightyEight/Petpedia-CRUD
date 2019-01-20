const pgp = require('pg-promise')({});
const db = pgp('posgres://localhost/petpedia');

const PetService = {};

PetService.create = (owner, type, name, age) => {

    return db.none('INSERT INTO pets (owner, type, name, age) VALUES (${owner}, ${type}, ${name}, ${age})', {
        owner,
        type,
        name,
        age
    })
};

PetService.read = (id) => {
    return db.one('SELECT * FROM pets WHERE id=${id}', {
        id: id
    })
};

PetService.update = (id, owner, type, name, age) => {
    return PetService.read(id)
        .then(data => {
            // console.log(data);
            let pet = data;
            if (!owner) {
                owner = pet.owner;
            }
            if (!type) {
                type = pet.type;
            }
            if (!name) {
                name = pet.name;
            }
            if (!age) {
                age = pet.age;
            }

            return db.one('UPDATE pets SET owner=${owner}, email=${email}, type=${type}, name=${name}, age=${age} WHERE id=${id}', {
                id,
                owner,
                type,
                name,
                age
            })

        }).catch(err => {
            return err;
        });

};

PetService.delete = (id) => {
    return db.none('DELETE FROM pets WHERE id=${id}', {
        id
    })
};

module.exports = PetService;