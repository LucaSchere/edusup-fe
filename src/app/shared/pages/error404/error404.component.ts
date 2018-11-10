import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '/src/assets/js/particles.json', null);
  }

}
