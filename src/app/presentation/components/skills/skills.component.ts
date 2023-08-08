import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: string[] = [
    "Producct Design",
    "UX Design",
    "Google Analytics",
    "SEO Content",
    "UI Design",
    "Web-Devlopment",
    "Integrated Design",
    "Design Strategy",
  ];
}
