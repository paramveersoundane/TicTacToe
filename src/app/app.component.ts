import { Component, OnInit } from '@angular/core';
import {TicTocToe} from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TicTacToe';
  play=new TicTocToe();
  win_one:string;
  flag:boolean;
  counter:number;
  visited=[
    [true,true,true],
    [true,true,true],
    [true,true,true]
  ];
   game:string[][]=[];
  
  // s='row1_col1';
  constructor(){
    
  }
  
 
  checkGameStatus(): boolean{
    console.log("Check game status")
    for(let i = 0; i < 3; i++){
      if(this.game[i][0]==this.game[i][1] && this.game[i][1]==this.game[i][2] && this.game[i][1]!=""
        || this.game[0][i]==this.game[1][i] &&this.game[2][i]==this.game[1][i] && this.game[1][i]!="" ||
        this.game[0][0]==this.game[1][1] &&this.game[2][2]==this.game[1][1] && this.game[1][1]!=""
        || this.game[0][2]==this.game[1][1] && this.game[2][0]==this.game[1][1] && this.game[1][1]!="") {
        console.log('here')
         if(this.game[i][0]=="o") this.win_one="Player1 is winner";
         else this.win_one="Player2 is winner"
         return true;
      }
    }
     return false;
  }
  changeInput(row:number,col:number,response){
    console.log(this.counter)
    if(this.counter==9) this.win_one='draw';
    //this.flag=!this.flag;
    console.log(this.checkGameStatus())
    if(this.flag==true && this.visited[row-1][col-1] && !this.checkGameStatus()){
      console.log("player 1 played")
      this.counter++;
      this.flag=false;
      response.value='o';
      this.game[row-1][col-1]="o";
       console.log(this.game)
      //if( this.visited[row-1][col-1]) response.value='o';
      this.visited[row-1][col-1]=false;
      console.log(this.visited[row-1][col-1],row,col)
    }
    else if(this.flag==false && this.visited[row-1][col-1]  && !this.checkGameStatus() ){
      console.log("player 2 played")
      this.counter++;
      this.flag=true
      response.value='x';
      //if( this.visited[row-1][col-1]) response.value='x';
      this.game[row-1][col-1]="x";
      this.visited[row-1][col-1]=false;
      console.log(this.visited[row-1][col-1],row,col)
    }
    this.checkGameStatus();
   }
   autoplay(): any{
    if(this.counter==9) this.win_one='draw';
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(this.flag==false && this.visited[i][j]  && !this.checkGameStatus() ){
          console.log("here");
          this.counter++;
          this.flag=true;
          this.game[i][j]="x";
          this.visited[i][j]=false;
          console.log(this.visited[i][j]);
          return 0;
          
        }
        else if(this.flag==true && this.visited[i][j]  && !this.checkGameStatus() ){
          this.counter++;
          this.flag=false;
         
          this.game[i][j]="o";
           console.log(this.game);
          //if( this.visited[row-1][col-1]) response.value='o';
          this.visited[i][j]=false;
          console.log(this.visited[i][j]);
          return 0;
          
        }
      }
    }

   }
   
  ngOnInit(){
    this.counter=1;
    this.game=[
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    setInterval(
      ()=> this.autoplay()
      ,5000
    )
    
    console.log(this.game)
    this.flag=true
    console.log(this.play)
  }
  
  
  
}
