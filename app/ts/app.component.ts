import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {VideoboxComponent} from './videobox.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives : [PlaylistComponent, VideoboxComponent]
})

export class AppComponent {

    urlForVideobox : string = "";
    mainHeading = Config.MAIN_HEADING;
    videos : Array<Video>;
    onNotify(message:string):void {
        this.urlForVideobox = message;
    }

    constructor(){
        this.videos = [
            new Video( 1, "Matthew McConaughey winning Best Actor", "wD2cVhC-63I", "Jennifer Lawrence presenting Matthew McConaughey with the Oscar® for Best Actor for his performance in \"Dallas Buyers Club\" at the 86th Oscars® in 2014."),
            new Video( 2, "Christian Bale winning Best Supporting Actor", "UsEGpXlpcO8", "Reese Witherspoon presenting Christian Bale with the Oscar® for Best Supporting Actor for his performance in \"The Fighter\" at the 83rd Academy Awards® in 2011."),
            new Video( 3, "Robert Downey Jr.-Golden Globe Awards-best actor", "SfGBO7tmJmg", "If you start playing violins, I will tear this joint apart.")
        ]

    }
}
