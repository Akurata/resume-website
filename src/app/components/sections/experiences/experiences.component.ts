import { Component } from '@angular/core';


@Component({
    selector: 'experience-section',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  companyName: string = '';
  jobTitle: string = '';
  startDate: string = '';
  endDate: string = '';
  description: string = '';

  tags: string[] = [];

  constructor() {}
}
