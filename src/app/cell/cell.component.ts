import { Component, OnInit, Output, HostListener, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() value: string;
  @Input() color: string[];
  //@Input() player: string;
  @Output('clickEvent') click = new EventEmitter<string>();
  constructor() { }
  @HostListener('click') clickHandlerChild(){
    this.click.emit('');
  }

  ngOnInit(): void {
  }

}
