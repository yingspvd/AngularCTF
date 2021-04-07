import { Component, Input } from'@angular/core';

@Component({
    selector:'app-counting',
    templateUrl:'./counting.component.html',
    styleUrls:['./counting.component.css']
})
export class CountingComponent {
    @Input()
    title: string;
    count = 0;
    constructor(){}

    countUpNumber(){
        this.count = this.count + 1;
    }

    
    countDownNumber(){
        this.count = this.count - 1;
    }
}