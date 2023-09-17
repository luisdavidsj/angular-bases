import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { GreetingsComponent } from "./components/greetings/greetings.component";


@NgModule({
  declarations:[
    CounterComponent,
    GreetingsComponent
  ],
  exports: [
    CounterComponent,
    GreetingsComponent
  ]
})
export class CounterModule{

}
