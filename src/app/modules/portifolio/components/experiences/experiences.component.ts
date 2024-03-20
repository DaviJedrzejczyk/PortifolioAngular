import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Programador Aprendiz Back-End',
        p: 'Benner Sistemas | 2023 - 2024',
      },
      text: '<p>Nesse período atuei como desenvolvedor BackEnd usando C#, Delphi e VB.NET. Trabalhei em produto ERP e Logística me destacando na parte de conversão de desktop para web. Neste tempo na Benner aprendi como aplicar os conceitos de SOLID e TDD durante uma conversão na logística, onde começamos a conversão do zero de um modulo na Web que só tinha no desktop. Sobre versionamento de Git sempre fui bem orientado de como deveria ser os padrões de mensagens e como enviar as alterações, seja via linha de comando ou pela própria IDE.</p>',
    },
  ]);
}
