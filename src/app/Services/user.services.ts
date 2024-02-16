import { EventEmitter, Injectable, Injector } from "@angular/core";
import { User } from "../Models/user.model";

@Injectable()
export class UserService{
  userList:User[] = [new User("John Smith", "Male" , "Yearly", 999, "Inactive"),
                    new User("Hena Smith", "Female" , "Quaterly", 699, "Active"),
                    new User("Suyash Sawant", "Male" , "Yearly", 999, "Inactive") ];

  onPushUser(user : User){
    this.userList.push(user);
  }

//   ShowUserBtnPressed : EventEmitter<User> = new EventEmitter<User>;


  returnAllUsers(){
    return this.userList;
  }

  deleteUserFromList(user:User){
    let idx = this.userList.indexOf(user);
    this.userList.splice(idx,1);
  }
}