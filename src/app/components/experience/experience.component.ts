import { Component } from '@angular/core';


@Component({
    selector: 'experience-item',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  companyName: string = '';
  jobTitle: string = '';
  startDate: string = '';
  endDate: string = '';
  description: string = '';

  tags: string[] = [];

  constructor() {}
}
