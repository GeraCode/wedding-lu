import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] =[
                     "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/269727772_10219503463875783_1783578417387327012_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFZdJ1gwYyas_1T4j0F5RQRvEjP7OngWh-8SM_s6eBaH_wuLJsXkFFQbWQjVk5wE1U&_nc_ohc=ScgVCevG3OEAX-hy02X&tn=R-P5pGDDmpXqdQZT&_nc_ht=scontent-qro1-2.xx&oh=00_AT9ko6wj0oleVWYaxUMGEQ3orzT7K7FEcYSyMltsO6XjiQ&oe=61CB08F9",
                     "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/269799736_10219503467035862_2453917585001226791_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeG5AvD28zNG-mccU2IbRhvShRLCr6bmP-qFEsKvpuY_6gqMTpozZ9ex8_yg0P1DMWM&_nc_ohc=CMTVk3e1JZoAX-UflSn&_nc_ht=scontent-qro1-2.xx&oh=00_AT83-JdqczC23z_Xw1-tiDAecKvtu1BEqMgNdzAaumrgiQ&oe=61CBA851",
                     "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/269745090_10219503465915834_707596017155324823_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFsbBRc0_6hSyc_s3qYzjuWa92NxU_psipr3Y3FT-myKsXfIYiuG5C1dbm6cE2ijNE&_nc_ohc=fLTkUvvJreMAX9YrqJ9&tn=R-P5pGDDmpXqdQZT&_nc_ht=scontent-qro1-2.xx&oh=00_AT8qvfIDtRWGeMZ3eTmJ_9_07ft5Xr0iBCrqD7IshC_EEw&oe=61CBC48D",
                     "https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/269719517_10219503468275893_3271893744090834134_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeErXWwTG0h6PhF5-u-HOOst42BODaAN6XLjYE4NoA3pckdX0sZ0jB1emBba9qm1rDk&_nc_ohc=7qykXOu6WycAX89LOlg&_nc_ht=scontent-qro1-2.xx&oh=00_AT-de7_pV5louCZn80t5iMh1GAhzVZylOLEjfrY_YyzpBQ&oe=61CC1384"

                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
