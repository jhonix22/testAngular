import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('LoginPanel',[
        state('inactive',
          style({marginTop:'-300px'})
        ),
        state('active',style({})),
        transition('inactive => active', [
                animate(300, keyframes([
                    //style({opacity: 0, transform: 'translateY(-300px)', offset: 0}),
                    //style({opacity: .50, transform: 'translateY(100px)', offset: .75}),
                    style({opacity: .3, transform: 'translateY(300px)', offset: 1}),
                ]))
        ]),
        transition('active => inactive', [
                animate(300, keyframes([
                    style({transform: 'translateY(-200px)',opacity:0, offset: 1})
                ]))
        ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  state: string = 'inactive';

  login(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
