import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Models/user.model';
import { UserService } from '../Services/user.services';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit{
    @Output()
    onConfirm : EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(){
    }
    @Input()
    delTheUser : User;
    ngOnInit(){

    }

    confirmDelete(){
      this.onConfirm.emit(true);
    }

    cancelDelete(){
      console.log("user not to del : " + this.delTheUser.name)
      this.onConfirm.emit(false);
    }
}
