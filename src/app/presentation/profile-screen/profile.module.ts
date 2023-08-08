import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "../components/profile/profile.component";
import { ProfileScreenComponent } from "./profile-screen.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {path:'' , component:ProfileScreenComponent}
]

@NgModule({
    declarations:[
        ProfileScreenComponent,
        ProfileComponent,
        SkillsComponent,
        GalleryComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ProfileModule{
    constructor(){
        console.log("profile screen");
    }
};