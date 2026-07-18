import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 titulo = "Sistema de controle de EPI;";
 subtitulo = "Gestão de segurança do trabalho";
 descricao = "Aplicação para controle, monitoramento e conformidade dos equipamentos de proteção individual";
 
}
