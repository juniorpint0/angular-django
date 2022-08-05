import { ApiService } from './api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';



  members = [
    {name: 'João', id: 1, surname: 'Amorin', photo: 'http://www.facebook.com/photo1'},
    {name: 'Pedro', id: 2, surname: 'Henrique', photo: 'http://www.facebook.com/photo2'},
    {name: 'Vitor', id: 3, surname: 'Guilherme', photo: 'http://www.facebook.com/photo3'}
  ]

  // private members = [];

  constructor(private api:ApiService, private router: Router){
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
    }
    ,
    error => {
      console.log("Aconteceu um erro", error);
    }
    );
  };

  memberClicked = (member:any) => {
    this.router.navigate(['member-detail', member.id]);
  };
}

