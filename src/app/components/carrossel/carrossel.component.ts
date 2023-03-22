import { Component } from '@angular/core';


@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {
  imageObject: Array<object> = [{
      image: '../../../assets/back4',
      thumbImage: '../../../assets/back4',
      alt: 'alt of image',
      title: 'title of image'
    }, {
        image: '../../../assets/back4', // Support base64 image
        thumbImage: '../../../assets/back4', // Support base64 image
        title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    }
  ];
}
