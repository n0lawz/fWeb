import { Model } from "./Model";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users'


// UserProps will replace T in model class
export class User extends Model<UserProps> {

}

