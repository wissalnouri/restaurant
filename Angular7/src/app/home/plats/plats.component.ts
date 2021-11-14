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
  platsbyid
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
  onDelete(d) {
    this.service.deletePlat(d).subscribe(
      res =>{
        this.platsDetalis= res;
        location.reload();
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit(d){
    
    this.service.getPlatsById(d).subscribe(
    res =>{
      this.platsbyid = res;
    },
    err =>{
      console.log(err);
    }
  

  );


}
s2;
onSubmit2(){
 
    
  


}

}
