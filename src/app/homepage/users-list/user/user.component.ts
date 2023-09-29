import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}
  @Input() user!: User;
  selectedUser: User;

  ngOnInit(): void {
    this.userService.subject.subscribe((user) => {
      this.selectedUser = user;
    });
    
  }

  openUser(user: User) {
    this.router.navigate(['user-details', user.id]);
    this.userService.raiseSubject(user);
    this.userService.paginationSubject.next(null);
  }
}
