import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hasImage = false;

  @Input() hasLink = false;

  @Input() title !: string;

  @Input() content !: string;

  @Input() imageUrl !: string;

  @Input() linkUrl !: string;

  @Input() linkName !: string;

  @Input() height = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
