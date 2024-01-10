import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/component/header/header.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {

}
