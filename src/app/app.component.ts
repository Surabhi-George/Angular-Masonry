import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor( ) { }

    ngOnInit(): void {
    }
    // Video Masonory
    masonary = [
        {
            image: 'https://i.pinimg.com/originals/5c/67/c1/5c67c14c7e4051c9c5a2ea3084526985.jpg',
            
        },
        {
            image: 'https://unsplash.it/700/500?image=1',
            
        },
        {
            image: 'https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&w=1000&q=80',
            
        },
        {
            image: 'https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            image: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg',
            
        },
        {
            image: 'https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg',
            
        },
        {
            image: 'https://www.w3schools.com/howto/img_forest.jpg',
            
        },
        {
            image: 'https://i.pinimg.com/564x/1b/30/80/1b30806bed30a7d071752948d00e75f8.jpg',
            
        },
        {
            image: 'https://i.pinimg.com/736x/5d/66/09/5d6609150b338d0f5829814c1f2fa4f9.jpg',
            
        },
        {
            image: 'https://pixlr.com/photo/image-editor-20200512-pw.jpg',
            
        },
        {
            image: 'https://www.canva.com/wp-content/themes/canvaabout/img/colorPalette/image4.jpg',
            
        }
    ]
}
