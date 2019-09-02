import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

  taches = [];

  constructor(private tacheService: ServiceService, private route: Router) { }

  ngOnInit() {
    this.taches = this.tacheService.getTache()
  }



}
