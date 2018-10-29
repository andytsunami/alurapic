import { Component } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent{
    url = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sultan_the_Barbary_Lion.jpg';
    description = 'Leão';
}