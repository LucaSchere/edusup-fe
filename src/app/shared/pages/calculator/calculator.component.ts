import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker-angular6';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  time: string;
  public selectedTime = '08:00';
  constructor(private atp: AmazingTimePickerService ) { }

  ngOnInit() {
  }

  open() {
    const amazingTimePicker = this.atp.open({
      theme: 'material-purple',
      changeToMinutes: true,
      arrowStyle: {
        background: 'black',
        color: 'white',
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
    });
  }
}
