import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatsService } from 'src/app/shared/plats.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  constructor(private router:Router,private service:PlatsService) { }
  platsDetalis;
  ngOnInit() {
    this.service.getPlats().subscribe(
      res =>{
        this.platsDetalis = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

}
