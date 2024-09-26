import { Component, OnInit, signal } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit{

  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('.swiper-custom');
    const swiperOptions: SwiperOptions = {
      pagination: true,
      navigation: {
        enabled: true,
      },
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2000
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    };
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
