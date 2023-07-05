import { Component } from '@angular/core';
import { Cards } from 'src/app/interfaces/Cards.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  title_line_1 = 'Descubre el portafolio de productos omnicanales'
  title_line_2 = 'all-in-one más completo del mercado'

  cards: Cards[] = [
    {
      img: '/assets/img/ic-site-producto-2@2x.png',
      title: 'Conversational Bot',
      text: 'Reduce costes y mejora los resultados con inteligencia artificial.',
      link: 'Ver producto'
    },
    {
      img: '/assets/img/ic-site-producto-3@2x.png',
      title: 'Contact Center',
      text: 'Obtén todas las herramientas y aplicaciones que necesitas para el éxito de tu centro de contactos. ',
      link: 'Ver producto'
    },
    {
      img: '/assets/img/ic-site-producto-1@2x.png',
      title: 'Marketing Automation & CRM',
      text: 'Potencia, rentabiliza e integra los procesos de marketing y ventas.',
      link: 'Ver producto'
    },
  ]

}
