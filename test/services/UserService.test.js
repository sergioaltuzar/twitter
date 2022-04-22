const UserService = require('./../../app/services/UserService');

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "sergioaltuzar", "Sergio");
        expect(user.username).toBe("sergioaltuzar");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
    test("2. Get all user data in a list", () => {
        const user = UserService. create(1, "sergioaltuzar", "Sergio");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("sergioaltuzar");
        expect(userInfoInList[2]).toBe("Sergio");
        expect(userInfoInList[3]).toBe("Sin bio");
    })
    test("3. Update username", () => {
        const user = UserService. create(1, "sergioaltuzar", "Sergio");
        UserService.updateUserUsername(user, "Serch")
        expect(user.username).toBe("Serch");
    })
    
})