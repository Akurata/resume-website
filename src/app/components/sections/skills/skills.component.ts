import { Component } from '@angular/core';

import { SKILLS_LIST } from './skills-list';

@Component({
    selector: 'skills-section',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = SKILLS_LIST;

  constructor() {}
}
