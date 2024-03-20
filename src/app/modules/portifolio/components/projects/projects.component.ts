import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/csharp3.png',
      alt: 'Projeto Controle de Estacionamento',
      title: 'Controle de Estacionamento',
      with: '100px',
      height: '100px',
      description:
        '<p>Um projeto simples de CRUD usando .NET Core 6.0, onde eu crio uma API e o frontend é feito em MVC ASP.NET Core 6.0. As tecnologias usadas são: Entity Framework para o banco de dados, FluentValidation para validação do código. Foi adotado o melhor padrão de repositório que eu conhecia no momento, dividindo em camadas como, camada das entidades, camada do repositorio camada da validação, e adotei o TDD, para fazer meu codigo direcionado a testes.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/Controle-De-Estacionamento',
        },
      ],
    },
    {
      src: 'assets/img/projects/csharp.png',
      alt: 'Projeto Integrador do meu Ensino Médio, PI Esporte Kindle',
      title: 'PI - Esporte Kindle',
      with: '100px',
      height: '100px',
      description:
        '<p>Um projeto integrador do meu ensino médio com técnico integrado que eu fiz com outros 2 participantes, um sistema de Controle de Estoque com CRUD completo e totalmente funcional. Usamos as tecnologias .NET Core 6.0 com WindowsForms, EntityFramework para o banco de dados e FluentValidation para a validação. O padrão de repositório usado foi MVC.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/Pi---Esporte.Kindle',
        },
      ],
    },
  ]);
}
