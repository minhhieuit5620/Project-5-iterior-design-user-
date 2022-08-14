// import * as internal from "stream";
// import { Tracing } from "trace_events";

export class Projects {
    idProject:number;
    nameProject:string;
    descriptionProject:string;
    avatarProject:string;
    imageProject:string;
    priceProject:number;
    flag:string;
    idCategoryProject:number;
    dateStart:Date;
    dateFinish:Date;
    location:string;
    nameCustomer:string;
    idCustomer:number;
}


export class Process{
    id:number;
    step:number;
    nameProcess:string;
    description:string;
}
