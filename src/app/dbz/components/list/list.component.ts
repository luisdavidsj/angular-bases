import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Reforzar esto!
  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]

  // Reforzar esto!
  @Output()
  // public onDelete = new EventEmitter<number>(); ---> Tecnicamente es lo mismo ya que en esta linea Typescript lo esta infiriendo automaticamente
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(index)
  }

}
