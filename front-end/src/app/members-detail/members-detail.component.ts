import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss']
})
export class MembersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
     private api: ApiService,
     private router: Router,
     private appComponent: AppComponent
     ) { }
  selected_member: any = {};
  selected_id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.selected_id = id;
      this.loadMember(id);
    })
    
  }


  loadMember(id:any) {
    
    this.api.getMember(id).subscribe(
      data => {
        this.selected_member = data;
      }
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      }
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }
  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index: any;
        this.appComponent.members.forEach((e, i) =>{
          if(e.id == this.selected_id)
            index = i;
            
        });
        this.appComponent.members.splice(index, 1);
      }
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }

  newMember(){
    this.router.navigate(['new-member'])
  }

  
}
