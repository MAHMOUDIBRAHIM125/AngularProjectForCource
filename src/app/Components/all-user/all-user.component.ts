import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/Services/user-data-service.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit{

users: any[] = [];

  constructor(private userService: UserDataServiceService){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.GetUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log('Users loaded:', res);
      },
      error: (err) => console.error('Error loading users:', err)
    });
  }

}
