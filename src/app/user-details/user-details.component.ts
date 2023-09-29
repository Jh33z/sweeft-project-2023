import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  users!: User;
  userId;

  ngOnInit(): void {
    this.usersService.subject.subscribe((data: User) => {
      this.users = data;
    });
  }
}
