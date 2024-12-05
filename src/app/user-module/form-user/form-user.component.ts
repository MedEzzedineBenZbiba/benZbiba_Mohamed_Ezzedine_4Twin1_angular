import { HttpClient } from '@angular/common/http';
import { afterNextRender, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  userForm : FormGroup;

  user : user;
  constructor(private userService: UserServiceService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        id : new FormControl(''),
        nom : new FormControl(''),
        age : new FormControl('')
      }
    )    
    // if (this.activateRoute.paramMap.subscribe(next => next.get('id')) )
   
    this.activateRoute.paramMap.subscribe( (params) => {
      const id = params.get('id');
      if(id) {
        this.userService.getUserById(id).subscribe(
          res => { this.user = res ;
                  this.userForm.setValue({
                    id : this.user.id,
                    nom : this.user.nom,
                    age : this.user.age
                  
                  })
                  this.userForm.get('id')?.disable();

          }
        )
      }
    }
    );

   
  

    
    // this.userForm.setValue({id: this.user.id , nom : this.user.nom });

  }

  save() {
    this.user = this.userForm.getRawValue();
    this.userService.addUser(this.user).subscribe();
    this.userForm.reset();
    console.log(this.user);
  }

  update(){
    this.user = this.userForm.getRawValue();
    // modifier
    this.userService.updateUser(this.user.id, this.user).subscribe();
    this.userForm.reset();
    console.log(this.user);
  }
    
  }



