import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_members: any;

  ngOnInit(): void {
    this.loadMember();
  }


  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getMember(id).subscribe(
      data => {
        this.selected_members = data;
        console.log(data);
      }
      ,
      error => {
        console.log("Aconteceu um erro", error);
      }
    );
  }
}
