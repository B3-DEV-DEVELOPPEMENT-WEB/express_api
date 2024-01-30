import {usersService} from "../services/users.service.js";

export function FindUsers (req, res) {
    const users = usersService.getAllUsers();
    res.send(users)
}

export function FindUserById (req, res) {
    const user = usersService.getUser(req.params.id);
    res.send(user);
}