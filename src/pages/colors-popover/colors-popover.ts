import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-colors-popover',
  templateUrl: 'colors-popover.html',
})
export class ColorsPopoverPage {

  brushColors = ['#ecf0f1', '#95a5a6', '#bdc3c7', '#7f8c8d', '#000000',
                 '#F1A9A0', '#D2527F', '#f1c40f', '#f39c12', '#e67e22', 
                 '#d35400', '#e74c3c', '#c0392b', '#6D4C41', '#3E2723', 
                 '#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#3498db',
                 '#2980b9', '#34495e', '#2c3e50', '#9b59b6', '#8e44ad',
                ];

  constructor(public viewCtrl: ViewController) {
  }

  /**
   * Sets new brush color
   * param color
   */
  setColor(color) {
    localStorage.setItem('canvasbrushcolor',color);
    this.viewCtrl.dismiss();
  }
}
