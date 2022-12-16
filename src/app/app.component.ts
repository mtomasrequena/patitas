import { Component } from '@angular/core';

import { Mascota } from './models/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'patitas-project';
  
  selectedMascota: Mascota = new Mascota();

  mascotaArray: Mascota[] = [
  { 
    id: 1, 
    name:'Teo', 
    raza: 'Golden', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam quam repellendus reprehenderit suscipit laboriosam ipsam quidem amet laudantium totam, alias, explicabo vero ducimus minima quia illo quaerat enim. Magnam?', 
    img: './assets/imagen1.PNG'
  },
    {id: 2, name:'Mile', raza: 'Mestiza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam quam repellendus reprehenderit suscipit laboriosam ipsam quidem amet laudantium totam, alias?', img: './assets/imagen2.PNG'},
    {id: 3, name:'Lara', raza: 'Labrador', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam quam repellendus reprehenderit suscipit laboriosam ipsam quidem amet laudantium totam, alias, explicabo vero ducimus minima quia illo quaerat enim. Magnam?', img: './assets/imagen3.jpg'},
  ];

  openForEdit(mascota: Mascota){
    this.selectedMascota = mascota;
  }
  
  addOrEdit(){
    if(this.selectedMascota.id === 0){
      this.selectedMascota.id = this.mascotaArray.length + 1;
      this.mascotaArray.push(this.selectedMascota)
    }

    this.selectedMascota = new Mascota();
  }

  delete(){
    if(confirm('¿Estás seguro de queres eliminarlo de la lista?')){
      this.mascotaArray = this.mascotaArray.filter(x => x != this.selectedMascota);
      this.selectedMascota = new Mascota();
    }
  }
}
