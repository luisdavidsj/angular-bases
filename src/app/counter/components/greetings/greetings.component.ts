import { Component } from "@angular/core";

@Component({
  selector: 'app-greeting',
  template: `<h3>{{ greeting }}</h3>`
})
export class GreetingsComponent {
  public greeting: string = "Esto es una prueba de un saludo dentro del componente greetings";
}
