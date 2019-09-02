import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-form-tache',
  templateUrl: './form-tache.component.html',
  styleUrls: ['./form-tache.component.css']
})
export class FormTacheComponent implements OnInit {

  @Input() tache;
  form: FormGroup;
  constructor(private tacheService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    let titre = "",
      etat = "A faire"

    if (this.tache) {
      titre = this.tache.titre;
      etat = this.tache.etat;


      console.log("tache", this.tache);
    }
    this.form = new FormGroup({
      titre: new FormControl(titre, [
        Validators.required,

        Validators.pattern("[A-Za-z]{2,8}[0,9]*")
      ]),
      etat: new FormControl(etat, Validators.required),

    });
  }


  get titre() {
    return this.form.get("titre");
  }


  ngOnChange() {
    console.log("change ", this.tache);
  }

  addTache() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.tacheService.addTache(this.form.value);
      this.initForm();
      console.log("hello")
    } else {
      alert("Veuillez remplir tous les champs! ");
    }
  }
}
