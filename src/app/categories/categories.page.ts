import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public userRol: string;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.userRol = this.activatedRoute.snapshot.paramMap.get('userRol');
    console.log('userRole', this.userRol);
  }
}
