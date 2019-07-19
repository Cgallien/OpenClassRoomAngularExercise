import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   Posts = [{
     title: 'Titre du premier post',
     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla consectetur, rhoncus risus sed, porttitor nibh. Suspendisse sed ligula eget justo lobortis sagittis sit amet vitae nibh. Donec nisl lacus, pulvinar ac lacus id, bibendum varius augue.',
     loveIts: 0,
     created_at: new Date()

   },{
    title: 'Titre du second post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla consectetur, rhoncus risus sed, porttitor nibh. Suspendisse sed ligula eget justo lobortis sagittis sit amet vitae nibh. Donec nisl lacus, pulvinar ac lacus id, bibendum varius augue.',
    loveIts: 0,
    created_at: new Date()

  },{
    title: 'Titre du troisième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla consectetur, rhoncus risus sed, porttitor nibh. Suspendisse sed ligula eget justo lobortis sagittis sit amet vitae nibh. Donec nisl lacus, pulvinar ac lacus id, bibendum varius augue.',
    loveIts: 0,
    created_at: new Date()

  },{
    title: 'Titre du quatrième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla consectetur, rhoncus risus sed, porttitor nibh. Suspendisse sed ligula eget justo lobortis sagittis sit amet vitae nibh. Donec nisl lacus, pulvinar ac lacus id, bibendum varius augue.',
    loveIts: 0,
    created_at: new Date()

  },{
    title: 'Titre du cinquième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla consectetur, rhoncus risus sed, porttitor nibh. Suspendisse sed ligula eget justo lobortis sagittis sit amet vitae nibh. Donec nisl lacus, pulvinar ac lacus id, bibendum varius augue.',
    loveIts: 0,
    created_at: new Date()

  }]

  title = 'exercise-oc-project';
}
