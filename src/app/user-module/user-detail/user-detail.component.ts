import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    constructor( private userService: UserServiceService, private activateRouter: ActivatedRoute){}
    id : any;
    user :user

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(params => this.userService.getUserById(params.get('id')).subscribe(res=> this.user = res))
  }
  



}
