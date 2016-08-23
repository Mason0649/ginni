import {Component, Input} from 'angular2/core';

@Component({
    selector : 'videobox',
    templateUrl : 'app/ts/videobox.component.html',

})

export class VideoboxComponent {

    @Input() urlVideo : string;    // ready to receive from his parent
    
}