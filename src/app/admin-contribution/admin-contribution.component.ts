import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-admin-contribution',
  templateUrl: './admin-contribution.component.html',
  styleUrls: ['./admin-contribution.component.scss']
})
export class AdminContributionComponent implements OnInit {

  constructor(private memberService:MembersService) { }
  members:any = {}
  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members=data;
    })
  }

}
