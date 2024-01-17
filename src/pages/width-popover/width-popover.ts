import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-width-popover',
  templateUrl: 'width-popover.html',
})
export class WidthPopoverPage {

  brushWidths = [
    {value: 1, label: '1px'},
    {value: 2, label: '2px'},
    {value: 3, label: '3px'},
    {value: 4, label: '4px'},
    {value: 5, label: '5px'},
    {value: 6, label: '6px'},
    {value: 7, label: '7px'},
    {value: 8, label: '8px'},
    {value: 9, label: '9px'},
    {value: 10, label: '10px'},
    {value: 12, label: '12px'},
    {value: 15, label: '15px'},
    {value: 20, label: '20px'},
    {value: 25, label: '25px'},
    {value: 30, label: '30px'},
  ];

  constructor(public viewCtrl: ViewController) {
  }

  /**
   * Sets new brush width
   * param width
   */
  setWidth(width) {
    localStorage.setItem('canvasbrushwidth',width);
    this.viewCtrl.dismiss();
  }
}
