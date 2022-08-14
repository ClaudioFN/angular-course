import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private leaderService: LeaderService,
    private route: ActivatedRoute) { }

  leaders: Leader[];

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.leaders = this.leaderService.getLeaders();
  }

}
