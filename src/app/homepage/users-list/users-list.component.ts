import { Component, OnInit, Input, HostListener } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  filteredUsers: User[] = [];

  currentPage = 1;
  pageSize = 8;

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((allData) => {
      this.filteredUsers = allData;
    });
    this.loadUsers();

    this.usersService.paginationSubject.subscribe(() => {
      window.scrollTo(0, 0);
      this.filteredUsers.splice(7, this.filteredUsers.length - 1);
      this.currentPage = 1;
      this.pageSize = 8;
    });
  }
  loadUsers() {
    this.usersService
      .getUsersWithPagination(this.currentPage, this.pageSize)
      .subscribe((users) => {
        this.filteredUsers = users;
      });
  }

  selectUser(user: User) {
    this.usersService.raiseSubject(user);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= scrollHeight) {
      this.loadMoreUsers();
    }
  }

  loadMoreUsers(): void {
    this.currentPage++;
    this.usersService
      .getUsersWithPagination(this.currentPage, this.pageSize)
      .subscribe((newUsers) => {
        this.filteredUsers = [...this.filteredUsers, ...newUsers];
      });
  }
}
