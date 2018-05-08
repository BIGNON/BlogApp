import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts: Post[] = [
    new Post("Mon premier Post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus leo sed luctus faucibus. Mauris non vestibulum enim. Quisque nisl lorem, porta a augue eget, elementum imperdiet dolor. Nullam lobortis sollicitudin mi et mollis. Nulla faucibus libero risus.") ,
    new Post("Mon deuxieme Post","Pellentesque id mauris ac sapien lacinia commodo. Vestibulum suscipit consequat massa, ut viverra nibh suscipit ullamcorper. In rutrum, nulla non sagittis lobortis, nunc neque pharetra diam, a placerat velit nisl et ligula. Nam vulputate pulvinar sapien convallis luctus. Etiam et purus in erat varius tincidunt.") ,
    new Post("Encore Post","Aliquam erat volutpat. Quisque nunc nibh, pharetra quis nulla eu, efficitur iaculis ante. Mauris viverra lectus urna, at iaculis nunc tempor in. Sed rhoncus sodales ipsum, nec bibendum sem tincidunt a. Fusce nec mi viverra, consectetur tortor in, gravida ligula. Mauris sodales erat id libero semper, consectetur tempus mi pharetra.") 
  ] 

}
