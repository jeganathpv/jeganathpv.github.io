import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // let typed = new Typed(".typing", {
    //   strings: ["Hi I am Sahil.", "This typing animation is very easy.", "You can easily make animation like this.", "And don't forget to Follow Me.","Thanks!"],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,
    // });
  }

}
