import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  taches: any = [
    { titre: "tache1", etat: 'A faire' },
    { titre: "tache2", etat: 'En cours' },
    { titre: "tache3", etat: 'Terminer' },
  ]
  getTache() {
    return this.taches
  }

  public addTache(tache) {

    return this.taches.push(tache);
  }


  constructor() { }
}
