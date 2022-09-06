import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.scss']
})
export class NewMemberComponent implements OnInit {
  member: any = {}
  constructor(
    private api: ApiService,
    private appComponent: AppComponent,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(){
    this.api.saveNewMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
        this.router.navigate(['']);
      }     
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }
  
  cancel() {
    this.router.navigate([''])
  }

}
