import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.css']
})
export class ItemsCardComponent {
  @Input() pd:any;
  constructor(private route:ActivatedRoute,private router:Router){}
  changeRoute(){
  this.router.navigate(['../details/id'],{relativeTo:this.route})
  }
}
