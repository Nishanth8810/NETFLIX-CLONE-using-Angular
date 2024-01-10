import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/videoContent.interface';
import { DescriptionPipe } from '../../pipes/description.pipe';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule,DescriptionPipe],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss'
})
export class MovieCarouselComponent implements OnInit,AfterViewInit {

    @Input() videoContents:IVideoContent[]=[];
    @Input() title:string='';
    
    @ViewChild('swiperContainer') swiperContainer!:ElementRef;

    constructor(){}

    ngAfterViewInit(): void {
    this.initSwiper();
  }
    ngOnInit(): void {
    
    }
    private initSwiper() {
      return new Swiper(this.swiperContainer.nativeElement, {
        slidesPerView: 3,
        slidesPerGroup: 2,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5,
            centeredSlides: true,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1500: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1800: {
            slidesPerView: 5,
            slidesPerGroup: 6,
            spaceBetween: 5,
            centeredSlides: false,
          }
        }
      })
    }
  

    
}
