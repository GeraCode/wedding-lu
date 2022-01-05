import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] =[
                     "./assets/photos/img1.jpg",
                     "./assets/photos/img2.jpg",
                     "./assets/photos/img3.jpg",
                     "./assets/photos/img4.jpg",
                     "./assets/photos/img5.jpg",
                     "./assets/photos/img6.jpg",
                     "./assets/photos/img7.jpg",
                     "./assets/photos/img8.jpg",
                     "./assets/photos/img9.jpg",
                     "./assets/photos/img10.jpg",
                     "./assets/photos/img11.jpg",
                     "./assets/photos/img12.jpg",
                     "./assets/photos/img13.jpg",
                     "./assets/photos/img14.jpg",
                     "./assets/photos/img15.jpg",
                     "./assets/photos/img16.jpg",
                     "./assets/photos/img17.jpg",
                     "./assets/photos/img18.jpg",
                     "./assets/photos/img19.jpg",
                     "./assets/photos/img20.jpg",
                     "./assets/photos/img21.jpg",
                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
