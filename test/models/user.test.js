const User = require('../../app/models/user');
describe ("Unit Test for User class", () =>{

    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "sergioaltuzar", "Sergio", "Bio", "dateCreated", "lastUpdated");
        //aqui validas los resultados de ese codigo para
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        expect(user.id).toBe(1);
        expect(user.username).toBe("sergioaltuzar");
        expect(user.name).toBe("Sergio");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined(); //verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined(); //verifica que el valor no sea undefined
    });
    test('Add getters', () => {
        //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "sergioaltuzar", "Sergio", "Bio");
        //aqui validas los resultados de ese codigo para
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        expect(user.getUsername).toBe("sergioaltuzar");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined(); //verifica que el valor no sea undefined
        expect(user.getLastUpdated).not.toBeUndefined();
    });

    test('Add setters', () => {
        //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "sergioaltuzar", "Sergio", "Bio");
        user.setUsername = "Luis";
        expect(user.username).toBe("Luis");
        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");
    });
});