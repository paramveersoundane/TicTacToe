import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  @Output() moveevent0 = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
