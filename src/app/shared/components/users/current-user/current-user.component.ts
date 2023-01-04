import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  providers: [UsersService],
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnInit {


  // TODO update backend aut/google/callback as per Udemy course
  // TODO add signin/signout callback for frontend

  isloading$ = this.usersService.isloading$;
  currentUser$ = this.usersService.currentUser$;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

}
