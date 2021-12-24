import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: string[] =[
                     "https://scontent.fmex18-1.fna.fbcdn.net/v/t39.30808-6/265204306_10219456640465227_2758887093855863866_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHObdOoOiks0XSvz8OnZRFWScAuQHL0X09JwC5AcvRfTzasQN9rxXcbmUEs5cTBimQ&_nc_ohc=iSGiGyPR_FUAX-b43o-&_nc_ht=scontent.fmex18-1.fna&oh=82225789b49a9d98df2e2fa3c6ca102f&oe=61B86B7F",
                     "https://scontent.fmex18-1.fna.fbcdn.net/v/t39.30808-6/237537031_10225575279959195_3083625355836025748_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFpfbVg39Jhq3_3oOI6-e7AVyMLsSGyIvBXIwuxIbIi8G2pcMrzU59mPiSF5O6K3dg&_nc_ohc=PuCWQdOWFeYAX89wtvT&_nc_ht=scontent.fmex18-1.fna&oh=c63a3fd811b74f54bda353df96b54dfa&oe=61B7AB6B",
                     "https://scontent.fmex18-1.fna.fbcdn.net/v/t1.6435-9/93060479_10221654010969921_1964106544668737536_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHA3KhQYMyQv9yG-LNiQKLuyYaLL27QF3bJhosvbtAXdskC8s0NnbyHiVg60OdESKA&_nc_ohc=5eoB8Jdny4cAX-toVLz&_nc_ht=scontent.fmex18-1.fna&oh=6f8dceba444b4e150916ae882035c885&oe=61DA42D1",
                     "https://scontent.fmex18-1.fna.fbcdn.net/v/t39.30808-6/265152650_10219456877831161_4741705232512666385_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGG_PEX3p5JT0Ed1VVJmCW5lKfB74-O3zmUp8Hvj47fOfGravZC9M7y5KdSvkNlQFc&_nc_ohc=QkPhP-MYOesAX98YNK6&_nc_ht=scontent.fmex18-1.fna&oh=00_AT97xW9qA8li5J76BlYp-G10CxjdeTLvlYC_jfCoMroTWg&oe=61B7CB6F"

                    ];

  constructor() { }

  ngOnInit(): void {
  }

}
