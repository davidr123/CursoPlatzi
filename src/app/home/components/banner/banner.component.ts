import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[]=[
'assets/image/joao.jpg',
'assets/image/luis1.jpg',
'assets/image/banner-2.jpeg',


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
