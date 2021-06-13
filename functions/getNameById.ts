import {IUser} from "../common/types/generalTypes";

export function getNameById(id: number, usersArr: IUser[]) {
    for (const user of usersArr) {
        if (user.id === id) {
            return user.name;
        }
    }
}