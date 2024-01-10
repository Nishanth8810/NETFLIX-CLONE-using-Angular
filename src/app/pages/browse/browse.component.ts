import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../core/component/header/header.component';
import { BannerComponent } from '../../core/component/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,BannerComponent,MovieCarouselComponent,CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  movieService=inject(MovieService);


  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe(res=>
    {
     
      
    })
  }
}
