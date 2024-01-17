import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-brush-type-popover',
  templateUrl: 'brush-type-popover.html',
})
export class BrushTypePopoverPage {

  brushTypes = [
    {value: 'Pencil', label: 'Pencil'},
    {value: 'Circle', label: 'Circle'},
    {value: 'Spray', label: 'Spray'},
    /*{value: 'Pattern', label: 'Pattern'},
    {value: 'hline', label: 'Horizontal lines'},
    {value: 'vline', label: 'Vertical lines'},
    {value: 'square', label: 'Square'},
    {value: 'diamond', label: 'Diamond'},
    {value: 'texture', label: 'Texture'},*/
  ];

  constructor(public viewCtrl: ViewController) {
  }

  /**
   * Sets new brush type
   * @param type
   */
  setType(type) {
    localStorage.setItem('canvasbrushtype',type);
    this.viewCtrl.dismiss();
  }
}
