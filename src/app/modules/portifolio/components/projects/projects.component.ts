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
    {
      src: 'assets/img/projects/net.png',
      alt: 'Projeto final do Entra 21',
      title: 'Task Manager Validator',
      with: '100px',
      height: '100px',
      description:
        '<p>Este foi o projeto final do meu curso do Entra 21 - Blusoft, um curso profissionalizante da minha cidade. Nesse projeto tivemos a idea de criar um site em que o usuário poderia validar se sua classe em C# estive seguindo os padrões e convenções que a própria <b>Microsoft</b> sugere a serem seguidas. Nesse tempo do projeto conseguimos entender e colocar em prática como funciona versionamento com git, trabalho em equipe e a gestão das nossas tarefas. Usamos o C# .NET Core 6.0 como linguagem principal, para o front-end foi usado o Razor, para gerar as paginas apartir de classes .cs criadas no projeto MVC, e esse projeto chamava uma api criada com C#. Para o Banco de Dados usamos o Entity Framework e usamos o padrão Repository para manter a segurança e melhor performance na navegação dos nossos dados, para validação de todo o CRUD, usamos o FluentValidation, e para a validação da classe que era enviada pelo usuário, usamos tecnologias da microsoft como Reflection e CodeAnalysis, com isso nós conseguiamos fazer o C# compilar a classe enviada pelo usuário e validarmos cada método, propriedade, construtor e nome da classe. Na época usamos o Azure Cloud para colocarmos nosso site na Web</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/machadobatistacosta/Task-Manager-Validator',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Projeto Lista de Tarefas ',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto foi mais um feito através do curso de Angular na Udemy na qual estou estudando. Aqui aprofundei mais o meu conhecimento de Angular, TypeScript, Html e CSS. Este projeto me trouxe um entendimento melhor de como funciona a conversação entre componentes pais e filhos, com input e output para CRUDS simples.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/ListaTarefasAngular',
        },
      ],
    },
    {
      src: 'assets/img/projects/logo.svg',
      alt: 'Projeto Pokedex',
      title: 'Pokedex',
      with: '125px',
      height: '125px',
      description:
        '<p>Este projeto foi feito com o intuito de mostrar como consumir uma Api com Angular, usei a Api Pokedex, comumente usada para fins didáticos.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/PokedexAngular',
        },
      ],
    },
    {
      src: 'assets/img/projects/angular.svg',
      alt: 'Projeto Autenticador',
      title: 'Autenticador',
      with: '95px',
      height: '95px',
      description:
        '<p>Este projeto foi feito com o intuito de mostrar como funciona a autenticação via JWT Token no Angular.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/AutenticadorAngular',
        },
      ],
    },
    {
      src: 'assets/img/projects/moon.png',
      alt: 'Projeto Theme Dark',
      title: 'Theme Dark',
      with: '75px',
      height: '75px',
      description:
        '<p>Este projeto aprendi como fazer pra mudar o tema do site.</p>',
      links: [
        {
          name: 'Conheça o projeto!',
          href: 'https://github.com/DaviJedrzejczyk/ThemeAngular',
        },
      ],
    },
  ]);
}
