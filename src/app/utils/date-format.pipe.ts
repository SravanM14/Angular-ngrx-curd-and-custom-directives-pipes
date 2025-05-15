import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'dateFormat'
})

export class DateFormat implements PipeTransform{
    transform(value: string, ...args: any[]):string {
         let fullDate = new Date(value);
         console.log(fullDate)
        return `${fullDate.getDate()}: ${(fullDate.getMonth()+1
         ) > 10? (fullDate.getMonth()+1 ):'0'+(fullDate.getMonth()+1)}: ${fullDate.getFullYear()}:${fullDate.getDay()}`
    }
}


