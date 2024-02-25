import { Component } from '@angular/core';
import { UserService } from '../Services/user.services';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // user : User = new User("Suyash Sawant", "Male" , "Yearly", 999, "Inactive");
  userlist :User[] = [];
  showUserTable : boolean = false;
  confirmUserDel : boolean = false;
  userToDel : User;
  newUser : any = {};


  constructor(private userservice : UserService ){
  }

  onGetUsers(){
    this.userlist = this.userservice.returnAllUsers();
    this.showUserTable = ! this.showUserTable;
  }

  onDelUser(user : User){
    this.confirmUserDel = true;
    this.userToDel = user;
    // this.userservice.deleteUserFromList(user);
  }

  storeUser(){
    this.userservice.onPushUser(this.newUser);
  }

  onUserDelAction(val : boolean){
    this.confirmUserDel = val;
    if(true){
      this.userservice.deleteUserFromList(this.userToDel);
      this.confirmUserDel = false;
    }
    else{

    }
  }
}
