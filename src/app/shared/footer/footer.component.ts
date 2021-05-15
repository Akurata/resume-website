import { Component, OnInit } from '@angular/core';
import { ScrollTo } from '../scrollto';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(public scroller: ScrollTo) { }

    ngOnInit() {}
}
