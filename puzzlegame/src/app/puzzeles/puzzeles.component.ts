import { Component, OnInit } from '@angular/core';

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
    '../../assets/img/6.jpg'
    ]
  imageUrl: string = '../../assets/img/4.jpg';
  constructor() { }

  ngOnInit() {
  }
  setimageUrl(img){
    this.imageUrl = img;
  }

}
