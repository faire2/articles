import {IUser} from "../types/generalTypes";

export function getUsernameById(id: number, usersArr: IUser[]) {
    for (const user of usersArr) {
        if (user.id === id) {
            return user.username;
        }
    }
}