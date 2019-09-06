import { User } from "../models/User";

export class SampleService {
    static GetUser(userID){
        return new User("Roger","Tester", userID);
    }
}