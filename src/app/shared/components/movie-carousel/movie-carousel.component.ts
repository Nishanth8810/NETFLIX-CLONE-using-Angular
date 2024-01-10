import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
})
export class MovieCarouselComponent implements OnInit {
    
    @ViewChild('swiperContainer') swiperContainer!:ElementRef

    constructor(){}
    ngOnInit(): void {
      
    }
    
    private initSwiper(){
      return new Swiper(this.swiperContainer.nativeElement,{
        slidesPerView:3,
        slidesPerGroup:2,
        centeredSlides:true,
        loop:true,
        breakpoints:{
          600:{
            slidesPerView:2,
            slidesPerGroup:2,
            spaceBetween:5,
            centeredSlides:true
          }
        }
      })
    }
}
