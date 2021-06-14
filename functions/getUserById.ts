import {IUser} from "../common/types/generalTypes";

export function getUserById(id: number, usersArr: IUser[]): IUser | undefined {
    for (const user of usersArr) {
        if (user.id === id) {
            return user;
        }
    }
    return undefined;
}