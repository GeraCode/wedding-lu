import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] =[
                     "./assets/imagenes/carrousel/nosotros1.JPG",
                     "./assets/imagenes/carrousel/nosotros2.JPG",
                     "./assets/imagenes/carrousel/nosotros3.JPG",
                     "./assets/imagenes/carrousel/nosotros4.jpg",
                     "./assets/imagenes/carrousel/nosotros5.JPG",
                     "./assets/imagenes/carrousel/nosotros6.JPG",
                     "./assets/imagenes/carrousel/nosotros7.JPG",
                     "./assets/imagenes/carrousel/nosotros8.jpg",
                     "./assets/imagenes/carrousel/nosotros9.jpg"
                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
