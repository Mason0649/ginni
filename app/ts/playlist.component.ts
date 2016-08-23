import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Video} from './video';

@Component({
    selector : 'playlist',
    templateUrl : 'app/ts/playlist.component.html',
    inputs : ['videos']
    
})

export class PlaylistComponent{

    videos : Array<Video>;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    currentVideo = "";

    onSelect(vid:Video){
        this.notify.emit(vid.videoCode);
    }
    
    constructor(){
        this.videos = [
            new Video( 1, "Matthew McConaughey winning Best Actor", "wD2cVhC-63I", "Jennifer Lawrence presenting Matthew McConaughey with the Oscar® for Best Actor for his performance in \"Dallas Buyers Club\" at the 86th Oscars® in 2014."),
            new Video( 2, "Christian Bale winning Best Supporting Actor", "UsEGpXlpcO8", "Reese Witherspoon presenting Christian Bale with the Oscar® for Best Supporting Actor for his performance in \"The Fighter\" at the 83rd Academy Awards® in 2011."),
            new Video( 3, "Robert Downey Jr.-Golden Globe Awards-best actor", "SfGBO7tmJmg", "If you start playing violins, I will tear this joint apart.")
        ]
    }
}