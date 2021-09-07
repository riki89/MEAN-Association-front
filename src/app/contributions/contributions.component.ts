import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {

  constructor(private memberService: MembersService) { }

  member:any;
  contributions:any;
  ngOnInit(): void {
    this.memberService.getOneMember("60d81ab3e860e04ee5fd4649").subscribe(data => {
      this.member = data;
      this.contributions = this.member.contribution;
    })
  }

}
