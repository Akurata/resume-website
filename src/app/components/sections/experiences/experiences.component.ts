import { Component } from '@angular/core';

import { EXPERIENCE_LIST } from './experience-list';
import { SKILLS_LIST } from '../skills/skills-list';

@Component({
    selector: 'experience-section',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  experiences = EXPERIENCE_LIST;
  skillKey = SKILLS_LIST;

  constructor() {}
}
