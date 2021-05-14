import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


declare const Particles;


@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;

    constructor(
      private renderer : Renderer2,
      private viewportScroller: ViewportScroller
    ) {
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      let input_group_focus = document.getElementsByClassName('form-control');
      let input_group = document.getElementsByClassName('input-group');
      for (let i = 0; i < input_group.length; i++) {
          input_group[i].children[0].addEventListener('focus', function (){
              input_group[i].classList.add('input-group-focus');
          });
          input_group[i].children[0].addEventListener('blur', function (){
              input_group[i].classList.remove('input-group-focus');
          });
      }


      // Initalize particles background
      Particles.init({
        selector: '.particle-background',
        color: ['#595959', '#333333', '#737373'],
        maxParticles: 125,
        minDistance: 400,
        sizeVariations: 2,
        speed: 0.05,
        connectParticles: true
      });
    }

}
