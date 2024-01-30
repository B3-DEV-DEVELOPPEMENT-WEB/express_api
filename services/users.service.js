class UsersService {
    getAllUsers() {
        const users = [
            "Thibaut",
            "Baptiste",
            "Hugo"
        ]
        return users;
    }

    getUser(id) {
        const user = {
            "id": id,
            "name": "pierpoljak"
        }
        return user;
    }
}
export const usersService = new UsersService();