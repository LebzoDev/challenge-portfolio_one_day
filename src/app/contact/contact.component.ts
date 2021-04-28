import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() mobile:boolean=true;

  value_contact:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
