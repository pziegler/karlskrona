class HomeController {
    constructor(Lightbox) {
    	this.lightbox=Lightbox;
        this.name = 'home';
        this.slides = [{
            url: 'https://firebasestorage.googleapis.com/v0/b/dive-karlskrona.appspot.com/o/divemaps%2Fklykach.jpg?alt=media&token=02cdbddc-b191-4939-b479-871195d509fb',
            title: 'Dive 1',
            id:0
        },
        {
            url: 'https://firebasestorage.googleapis.com/v0/b/dive-karlskrona.appspot.com/o/divemaps%2Fekenabben.jpg?alt=media&token=4bcb1ad3-e9e1-430f-b843-ccb863c615d6',
            title: 'Dive 2',
            id:1
        }];
    }
    showfull(slide) {
        var image = {
            'url': slide.url,
            'caption': slide.title
        };
        this.lightbox.openModal([image], 0);
    };
}
HomeController.$inject = ['Lightbox'];
export default HomeController;
