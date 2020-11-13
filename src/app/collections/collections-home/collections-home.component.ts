import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Aghata', age: 14, job:'Nutritionist', employed: false},
    { name: 'Joelson', age: 49, job:'Quality', employed: true},
    { name: 'Wheyckson', age: 21, job:'Programmer', employed: false},
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
    {key: 'employed', label: 'Has a Job?'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
