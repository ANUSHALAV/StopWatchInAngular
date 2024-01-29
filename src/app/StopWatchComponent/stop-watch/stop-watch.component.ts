import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent {

  constructor() {
    this.resetTime();
  }

  hrs: any = "00";
  min: any = "00";
  sec: any = "00";
  timestart: any;
  buttonDisabled = false;
  playbutton: any;

  playbtn() {
    if (!this.buttonDisabled) {
    
      this.timestart = setInterval(() => {
        this.sec++;
        this.checkTime();
      }, 1000);
      
      
      this.buttonDisabled = true;
    }
  }

  stopbtn() {
    clearInterval(this.timestart);
    this.buttonDisabled = false;
  }

  clearbtn() {
    this.resetTime();
    clearInterval(this.timestart);
    this.buttonDisabled = false;
  }

  checkTime() {
    if (this.sec === 60) {
      this.min++;
      this.sec = "00";
    }
    if (this.min === 60) {
      this.hrs++;
      this.min = "00";
    }
  }

  resetTime() {
    this.hrs = "00";
    this.min = "00";
    this.sec = "00";
  }
}
