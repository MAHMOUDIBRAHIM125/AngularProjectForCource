import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  images = [
    { src: 'assets/img1.jpg', desc: 'Beautiful Landscape' },
    { src: 'assets/img2.jpg', desc: 'Sunny Beach' },
    { src: 'assets/img3.jpg', desc: 'Snowy Mountains' },
    { src: 'assets/img4.jpg', desc: 'City Lights' }
  ];

  currentIndex = 0;
  interval: any;
  showDesc = false;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startSlider() {
    if (!this.interval) {
      this.interval = setInterval(() => this.nextImage(), 500);
      // console.log(this.interval);
    }
  }

  stopSlider() {
    clearInterval(this.interval);
    this.interval = null;
  }

  toggleDescription() {
    this.showDesc = !this.showDesc;
  }

}
