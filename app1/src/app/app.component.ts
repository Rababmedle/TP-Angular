import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <h1>Welcome to {{ pokemons[0] }}!</h1>`,
})
export class AppComponent implements OnInit {
  pokemons = ["Bulbizare", "Salameche", "Carapuce"];
  ngOnInit() {
    console.table(this.pokemons);
    this.selectPokemons("Bulbizare");
  }
  selectPokemons(pokemonsName: String) {
    console.log(`vous avez cliquer sur le pokemon ${pokemonsName}`);
  }
}
