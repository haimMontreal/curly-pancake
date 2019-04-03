import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display-dad',
  templateUrl: './display-dad.component.html',
  styleUrls: ['./display-dad.component.scss']
})
export class DisplayDadComponent implements OnInit {
  dadUrl: string;
  dadName: string;

  constructor(private dadFetcher: ApiService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.dadName = params.get('name');
    });
  }


    ngOnInit() {
      this.dadFetcher.getRandomDad().subscribe(
        (result) => {
          this.dadUrl = result.message;
        }
      );
    }

}
