import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

console.log(uuid());

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    name: "Krilin",
    power: 1000,
    id: uuid()
  },{
    name: "Goku",
    power: 9500,
    id: uuid()
  },{
    name: "Vegeta",
    power: 7500,
    id: uuid()
  }];

  onNewCharacter(character: Character): void {
    /* Estamos utiliando el operador Spread del character (...character) y con esto digo: Toma todas sus propiedades y esparcelas en este nuevo objeto que estoy creando
    Lo que hacemos aqui es mejor que lo de abajo, por que si tuvieramos mas propiedades aqui no habria que cambiar absolutamente nada

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    */
    const newCharacter: Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number){
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string){
    /* Este this.characters.filter va a regresar un nuevo arreglo, con la condicion que tenemos dentro del filter, el; filter barre cada uno de los elementos del arreglo
    y va a retornar todos los que esa condicion cumplan true, pero el que sea exactamente al id que tengo al final de la condicion dentro del filter,
    va a ser la condicion que no se cumpla y ese es el elemento que va a filtrar basicamente, y el nuevo arreglo de character va a incluir todos, menos el
    que coincida con ese id */
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
