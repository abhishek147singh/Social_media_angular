# Angular project with clean archtecture

## Folder structure

&nbsp;&nbsp; 
### [src/app](/src/app)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This is the main directory of the Application.

&nbsp;&nbsp; 
#### [src/app/core](/src/app/core) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains all the declarations of mappers, models, repositories, services in specific structure.

&nbsp;&nbsp; 
##### [src/app/core/base](/src/app/core/base) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains mappers declarations(abstract classes of mappers).In this application mappers are used to map backend data with [view models](/src/app/core/domain).

&nbsp;&nbsp; 
##### [src/app/core/domain](/src/app/core/domain) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains models declarations which have used for view connectivity with api data.

&nbsp;&nbsp; 
##### [src/app/core/repositories](/src/app/core/repositories) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains declarations of repositories. and repositories are the classes which fetch the data from backend and map with [view models](/src/app/core/domain) with mappers.

&nbsp;&nbsp; 
##### [src/app/core/services](/src/app/core/services) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains declarations of all services. In this Project services fetch the data from repositories.

&nbsp;&nbsp; 
#### [src/app/data](/src/app/data) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains implementations of all mappers and repositories.

&nbsp;&nbsp; 
##### [src/app/data/mapper](/src/app/data/mapper) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains implementations of all mappers.

&nbsp;&nbsp; 
##### [src/app/data/repository](/src/app/data/repository) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains implementations of all repositories.

&nbsp;&nbsp; 
#### [src/app/entity](/src/app/entity) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains models of entities to connect with backend.

&nbsp;&nbsp; 
#### [src/app/presentation](/src/app/presentation) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains view logic (componets and screen code).

&nbsp;&nbsp; 
#### [src/app/service](/src/app/service) 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This directory contains implementations of all servies which we have defined in [src/app/core/services](/src/app/core/services) directory.

















