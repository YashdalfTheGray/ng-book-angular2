/// <reference path="node_modules/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'hello-world'
})
@View({
    templateUrl: 'home.tpl.html'
})
class helloWorld {
}

bootstrap(helloWorld);