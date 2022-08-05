import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_members: any;
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
        this.selected_members = data;
      }
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }
}
