import { NgModule } from "@angular/core";
import { IPersonRepository } from "../core/repositories/IPerson.repository";
import { PersonRepository } from "../data/repository/person.repository";
import { IPersonService } from "../core/services/IPerson.service";
import { PersonService } from "./person.service";
import { IPostService } from "../core/services/IPost.service";

@NgModule({
    providers: [
        {provide: IPersonRepository, useClass: PersonRepository},
        {provide: IPersonService, useClass: PersonService},
        // {provide: IPostService,useClass:PostSer}
      ]
})

export class ServiceModule{};