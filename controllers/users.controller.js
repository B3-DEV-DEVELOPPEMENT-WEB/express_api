const users = [
    "Thibaut",
    "Baptiste",
    "Hugo"
]

export function FindUsers (req, res) {
    res.send(users)
}

export function FindUserById (req, res) {
    res.send(req.params.id);
}