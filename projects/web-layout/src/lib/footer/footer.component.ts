import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  link: string;

  @Input()
  content = 'Information';

  constructor() { }

  ngOnInit() {
  }

}
