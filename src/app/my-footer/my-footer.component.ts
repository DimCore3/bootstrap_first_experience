import { Component, OnInit } from '@angular/core';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.scss']
})
export class MyFooterComponent implements OnInit {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
  ngOnInit(): void {
  }
}