import {Component} from 'angular2/core';
import {Config} from './config.service';
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
    onNotify(message:string):void {
        this.urlForVideobox = message;
    }
    
}
