import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Users,
  UsersApiServiceService,
} from '../../data-access/users-api-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'angular-users-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UsersApiServiceService],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  title = 'users';
  users: Users[] = [];

  constructor(private readonly usersApiService: UsersApiServiceService) {}

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  public onDelete(id: number) {
    return (this.users = this.users.filter((user) => {
      return user.id !== id;
    }));
  }
}
