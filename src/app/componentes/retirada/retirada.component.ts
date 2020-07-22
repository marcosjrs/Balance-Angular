import { Component, OnInit, Input } from '@angular/core';
import { Retirada } from 'src/app/modelos/retirada.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.css']
})
export class RetiradaComponent implements OnInit {
  @Input()
  retiradas:Observable<Retirada[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
