import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public cells : string[]= [];
  private turn: string= "x";
  public gameover: boolean= null;
  public winner: string=null;
  public colors: string[]=[];
  public player: string=null;


  constructor() { }

  ngOnInit() {
    for( let i=0; i<9;i++){
      this.cells[i]=null;
     
    }
    console.log(this.cells);
    setInterval(
      ()=> this.autoplay()
      ,5000
    )
    
  }
  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  
  clickHandler(i: number) {
    if(!this.gameover){
       if(this.cells[i]===null){
        this.cells[i]=this.turn;
        this.checkWinner();
        this.changeTurn(i);
       }
    }
   
  }
  changeTurn(i:number){
    if(this.turn==='x'){
      this.turn='o';
      this.colors[i]='yellow';
      this.player='Player 1';

    }else{
      this.turn='x';
      this.colors[i]='green';
      this.player='Player 2';
    }
  }
  checkWinner(){
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for( let line of lines){
      if(this.cells[line[0]]=== this.cells[line[1]] && this.cells[line[2]]=== this.cells[line[1]] 
        && this.cells[line[0]]!=null){
        this.gameover =true;
        this.winner=this.player;
      }
      let occupy=0;
      this.cells.forEach( (e)=> occupy+=e!=null?1:0);
      console.log(occupy)
      if(occupy===9){
        this.winner="tie";
        this.gameover=true;

      }
    }

  }

  autoplay(){
    console.log("Autoplay");
    
    for( let i=0; i<9; i++){
      if(!this.gameover && this.cells[i]===null ){
      this.cells[i]=this.turn;
      this.checkWinner();
      this.changeTurn(i);
      return;
      }
    }
  }


  
}



