import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = [
    "/assets/img/ic-site-carrousel-1@2x.png",
    "/assets/img/ic-site-carrousel-2@2x.png",
    "/assets/img/ic-site-carrousel-3@2x.png",
  ]

}
