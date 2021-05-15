import { Component } from '@angular/core';
import { ScrollTo } from '../../../shared/scrollto';

@Component({
    selector: 'lead-section',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.scss']
})
export class LeadComponent {

  constructor(public scroller: ScrollTo) {}
}
