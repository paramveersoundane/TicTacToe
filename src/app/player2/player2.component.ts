import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {
  @Output() moveeventX= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
