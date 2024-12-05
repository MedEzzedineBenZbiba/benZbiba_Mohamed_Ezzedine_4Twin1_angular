import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  users : user[] 
  constructor(private userService : UserServiceService) {}
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data : user[] )=> {this.users =data;
      });
  }
  
  deleteUser(u : user){
    this.userService.deleteUser(u).subscribe();
  }

  

}
