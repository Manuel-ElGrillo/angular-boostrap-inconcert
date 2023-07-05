import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  copy = "© 2022 inConcert";

  links = [
    {
      text: "Aviso Legal",
      url: "#"
    },
    {
      text: "Políticas de Privacidad",
      url: "#"
    },
    {
      text: "Política de Cookies",
      url: "#"
    },
    
  ]

}
