import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

const options={
  params:{
    include_adults:'false',
    include_video:'true',
    language:'en-US',
    page:'1',
    sort_by:'popularity.desc'
  },
  headers:{
    accept:'application/json',
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTJlNjNmZGNiODk1Y2M1Nzk1NzhhNzZiYjJjNGNhZCIsInN1YiI6IjY1OWU3NWQyZmM1ZjA2MDI1YWU1YWNmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFXC_ePqMmMWdPz2n5khRMV6LYAjqva9BH5pjf3CdJQ'
  }
}

@Injectable({
  providedIn:'root'
})
export class MovieService{
  http= inject(HttpClient)

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie',options)
  }
}