const User = require('../../app/models/user');
describe ("Unit Test for User class", () =>{

    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app.
        const user = new User(1, "carlogilmar", "Carlo", "Bio", "dateCreated", "lastUpdated");
        //aqui validas los resultados de ese codigo para
        //Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha
        expect(user.id).toBe(1);
        expect(user.username).toBe("carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined(); //verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined(); //verifica que el valor no sea undefined
    });
});