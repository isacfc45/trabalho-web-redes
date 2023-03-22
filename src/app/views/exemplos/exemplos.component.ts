import { Component } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-exemplos',
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.scss']
})
export class ExemplosComponent {
  cars: any[] = [];
  responsiveOptions: any[] = [];

}
