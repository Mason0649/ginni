import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Video} from './video';

@Component({
    selector : 'playlist',
    templateUrl : 'app/ts/playlist.component.html',
    inputs : ['videos']
    
})

export class PlaylistComponent{

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    currentVideo = "";

    onSelect(vid:Video){
        this.notify.emit(vid.videoCode);
        
    }
}