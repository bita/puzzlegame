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
    '../../assets/img/6.jpg',
      ]
  imageUrl: string = '../../assets/img/4.jpg';
  imageName: string = "4";
  constructor() { }

  ngOnInit() {
  }
  setimageUrl(img){
    this.imageUrl = img;
    this.imageName = this.imageUrl.substr(this.imageUrl.lastIndexOf('/') + 1).split('.')[0];
    return this.imageName;

  }
  // setimageName(imgname){
  //   this.imageName = imgname;
  // }

}
