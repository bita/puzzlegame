import { Component, OnInit } from '@angular/core';
import { timer, Subject, Subscription, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { PuzzleGameComponent } from '../puzzle-game/puzzle-game.component';


@Component({
  selector: 'app-puzzeles',
  templateUrl: './puzzeles.component.html',
  styleUrls: ['./puzzeles.component.css']
})
export class PuzzelesComponent implements OnInit {
  imges = [
    '../../assets/img/3.jpg',
    '../../assets/img/4.jpg',
    '../../assets/img/5.jpg',
    '../../assets/img/6.jpg',
      ]
  imageUrl: string = '../../assets/img/4.jpg';
  imageName: string = "4";
  steps: number = 0;
  private reset$ = new Subject();
  timer$: Observable<any>;
  subscription: Subscription;
  refresh:boolean = true;
  refreshSubject: Subject<number>;



  imageSize: number = 500;
  gridsize: number = 8;
  boxSize: number = 100 / (this.gridsize - 1);
  index: number = 0;
  totalBoxes: number = this.gridsize * this.gridsize;
  Image: any[] = [];
  difficulty: string = '4';
  score: number = 0;
  ticks: string = '0:00';
  timeVar: any;
  gameComplete: Boolean = false;
  isVisible:boolean = true;
  indexes: number[] = [];
  position: number[] = [];
  ngOnInit() {
    this.startGame();
    
  }

  isSorted(indexes): Boolean {
    let i: number = 0;
    for (i = 0; i < indexes.length; i++) {
      if (indexes[i] !== i) {
        return false;
      }
    }
    return true;
  }

  randomize(imageParts: any[]): any[] {
    let i = 0, img: any[] = [], ran = 0;
    for (i = 0; i < imageParts.length; i++) {
      ran = Math.floor(Math.random() * imageParts.length);
      while (imageParts[ran] == null) {
        ran = Math.floor(Math.random() * imageParts.length);
      }
      img.push(imageParts[ran]);
      this.position.push(imageParts[ran].index);
      imageParts[ran] = null;
    }
    this.printIndexes(this.indexes);
    this.printIndexes(this.position);
    return img;
  }

  onDragStart(event: any, data: any): void {
    event.dataTransfer.setData('data', event.target.id);
  }
  onDrop(event: any, data: any): void {
    let origin = event.dataTransfer.getData('data');
    let dest = event.target.id;


    let originEl = document.getElementById(origin);
    let destEl = document.getElementById(dest);

    let origincss = originEl.style.cssText;
    let destcss = event.target.style.cssText;


    destEl.style.cssText = origincss;
    originEl.style.cssText = destcss;
    originEl.id = dest;
    destEl.id = origin;


    for (let i = 0; i < this.position.length; i++) {
      if (this.position[i].toString() === originEl.id) {
        this.position[i] = Number(destEl.id);
      } else if (this.position[i].toString() === destEl.id) {
        this.position[i] = Number(originEl.id);
      }

    }

    this.printIndexes(this.position);
    this.steps++;
    this.gameComplete = this.isSorted(this.position);
    if (this.gameComplete) {
      var ms = this.ticks; 
      var difficulty = parseInt(this.difficulty);
      var a = ms.split(':');
      var seconds = (+a[0]) * 60 + (+a[1])
      this.score = Math.ceil((Math.pow(6000 / ((seconds)), difficulty))/ 1000000);
      

      if (this.timeVar) {
        this.timeVar.unsubscribe();
      }
    }
  }
  
  allowDrop(event): void {
    event.preventDefault();
    event.target.style.opacity = 1;
  }

  printIndexes(sorts: number[]): void {
    let i: number = 0, ind: string = '';
    for (i = 0; i < sorts.length; i++) {
      ind += sorts[i].toString() + ' , ';
    }
  }

  reRandomize(): void {
    this.gameComplete = false;
    this.Image = this.randomize(this.Image);
  }

  startGame(): void {
    this.reset();
    this.initializeGame();
    this.breakImageParts();
    this.reRandomize();
    this.steps = 0;
    if (this.timeVar) {
      this.timeVar.unsubscribe();
    }
    this.isVisible = true; 
  }
  stopGame():void {
    this.ticks = "0:00";
    this.timer$ = timer(0, 1000);
    this.timeVar.unsubscribe();
    this.steps = 0;
    this.isVisible = true;
  }
  startTheGame(){
    this.isVisible = false;
    this.startTimer();

  }
  startTimer(): void {
    if (this.timeVar) {
      this.timeVar.unsubscribe();
      // this.isVisible = false;
      this.steps = 0;
    }
    if(!this.isVisible){
      this.timeVar = this.timer$.subscribe(t => {
      this.settime(t);

    });
  }

  }

  settime(t: number) {
    this.ticks = Math.floor(t / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ':' +
      (t % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  }
  breakImageParts(): void {
    for (this.index = 0; this.index < this.totalBoxes; this.index++) {
      const x: string = (this.boxSize * (this.index % this.gridsize)) + '%';
      const y: string = (this.boxSize * Math.floor(this.index / this.gridsize)) + '%';
      let img: ImageBox = new ImageBox();
      img.x_pos = x;
      img.y_pos = y;
      img.index = this.index;
      this.indexes.push(this.index);
      this.Image.push(img);
      
    }
    this.boxSize = this.imageSize / this.gridsize;
    
  }

  initializeGame(): void {
    this.isVisible = true;
    this.gridsize = Number(this.difficulty);
    this.boxSize = 100 / (this.gridsize - 1);
    this.index = 0;
    this.totalBoxes = this.gridsize * this.gridsize;
  }

  reset(): void {
    this.Image = [];
    this.indexes = [];
    this.position = [];
    this.steps = 0;
    this.isVisible = true;
    if (this.timeVar) {
      this.timeVar.unsubscribe();
    }

  }

  setimageUrl(img){
    this.imageUrl = img;
    this.imageName = this.imageUrl.substr(this.imageUrl.lastIndexOf('/') + 1).split('.')[0];
     }
  

  initTimer(): void {
    // let FirstComponentObject = new PuzzleGameComponent();
    this.reset$
      .pipe(
        startWith(void 0),
        switchMap(() => timer(0, 1000)),
      )
      .subscribe(() => { if (this.refresh) { this.refreshTimer();this.refresh = false;}});
      // FirstComponentObject.startGame();
      
  }
  
  refreshTimer() {
    this.isVisible = true;
    this.refresh = true;
    this.ticks= "0:00"
    if(!this.isVisible)
    {

      this.reset$.next(void 0)
    }
    else if (this.timeVar) 
    {
      this.timeVar.unsubscribe();
    };
    this.steps = 0;

  }
  refreshSteps(){
    
}

  

  constructor() {
    
      this.timer$ = this.reset$.pipe(
        startWith(0),
        switchMap(() => timer(0, 1000))
      );
  }


  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }


  
}

class ImageBox {
  x_pos: string;
  y_pos: string;
  index: number;
}
