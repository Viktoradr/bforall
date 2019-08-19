import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lista: any[];
  header: any[];
  keyId: '_id';

  constructor() { }

  ngOnInit() {
    this.header = [
      {
        title: "Nome",
        param: "Nome"
      },
      {
        title: "Email",
        param: "Email"
      },
      {
        title: "Produto",
        param: "Produto.Nome"
      }
    ];

    this.lista = [
      {
        "_id": "5d31eb9916182c0017f30b7e",
        "Nome": "Elaine",
        "Email": "elaine_sreis@hotmail.com",
        "Sobrenome": "Sobral Quirino",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ab0",
          "Nome": "Pacote de fralda M + Body manga curta M",
          "Escolhido": true
        },
        "Cadastro": "2019-07-19T13:11:05.918-03:00",

      },
      {
        "_id": "5d31c4d13273bd001727b560",
        "Nome": "Victor",
        "Email": "victor.adrodrigues@outlook.com",
        "Sobrenome": "Rodrigues",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa3",
          "Nome": "Pacote de fralda P + Colher dosadora",
          "Escolhido": true
        },
        "Cadastro": "2019-07-19T10:25:37.094-03:00",
      },
      {
        "_id": "5d31c4b33273bd001727b55e",
        "Nome": "Víctor",
        "Email": "victor.adrodrigues@outlook.com.br",
        "Sobrenome": "Rodrigues",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa2",
          "Nome": "Pacote de fralda P + Seringa dosadora de remédio",
          "Escolhido": true
        },
        "Cadastro": "2019-07-19T10:25:07.117-03:00",
      },
      {
        "_id": "5d31c4953273bd001727b55c",
        "Nome": "Iasmin",
        "Email": "iasmincosilva@gmail.com",
        "Sobrenome": "Oliveira",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa1",
          "Nome": "Pacote de fralda P + Chupeta(Porta) frutinha",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-19T10:24:37.239-03:00",
      },
      {
        "_id": "5d3086ef2142b10017a2988f",
        "Nome": "Juan",
        "Email": "juan.aranha@gmail.com",
        "Sobrenome": "Barros",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ac3",
          "Nome": "Pacote de fralda G + Body manga curta G",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-18T11:49:19.920-03:00",
      },
      {
        "_id": "5d2ca2ef1b73660017768bae",
        "Nome": "Renato",
        "Email": "lucianasobrallg0070@gmail.com",
        "Sobrenome": "Mendonça",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ab7",
          "Nome": "Pacote de fralda G + Touca",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-15T12:59:43.955-03:00",
      },
      {
        "_id": "5d31c4b33273bd001727b55e",
        "Nome": "Víctor",
        "Email": "victor.adrodrigues@outlook.com.br",
        "Sobrenome": "Rodrigues",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa2",
          "Nome": "Pacote de fralda P + Seringa dosadora de remédio",
          "Escolhido": true
        },
        "Cadastro": "2019-07-19T10:25:07.117-03:00",
      },
      {
        "_id": "5d31c4953273bd001727b55c",
        "Nome": "Iasmin",
        "Email": "iasmincosilva@gmail.com",
        "Sobrenome": "Oliveira",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa1",
          "Nome": "Pacote de fralda P + Chupeta(Porta) frutinha",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-19T10:24:37.239-03:00",
      },
      {
        "_id": "5d3086ef2142b10017a2988f",
        "Nome": "Juan",
        "Email": "juan.aranha@gmail.com",
        "Sobrenome": "Barros",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ac3",
          "Nome": "Pacote de fralda G + Body manga curta G",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-18T11:49:19.920-03:00",
      },
      {
        "_id": "5d2ca2ef1b73660017768bae",
        "Nome": "Renato",
        "Email": "lucianasobrallg0070@gmail.com",
        "Sobrenome": "Mendonça",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ab7",
          "Nome": "Pacote de fralda G + Touca",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-15T12:59:43.955-03:00",
      },
      {
        "_id": "5d31c4b33273bd001727b55e",
        "Nome": "Víctor",
        "Email": "victor.adrodrigues@outlook.com.br",
        "Sobrenome": "Rodrigues",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa2",
          "Nome": "Pacote de fralda P + Seringa dosadora de remédio",
          "Escolhido": true
        },
        "Cadastro": "2019-07-19T10:25:07.117-03:00",
      },
      {
        "_id": "5d31c4953273bd001727b55c",
        "Nome": "Iasmin",
        "Email": "iasmincosilva@gmail.com",
        "Sobrenome": "Oliveira",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514aa1",
          "Nome": "Pacote de fralda P + Chupeta(Porta) frutinha",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-19T10:24:37.239-03:00",
      },
      {
        "_id": "5d3086ef2142b10017a2988f",
        "Nome": "Juan",
        "Email": "juan.aranha@gmail.com",
        "Sobrenome": "Barros",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ac3",
          "Nome": "Pacote de fralda G + Body manga curta G",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-18T11:49:19.920-03:00",
      },
      {
        "_id": "5d2ca2ef1b73660017768bae",
        "Nome": "Renato",
        "Email": "lucianasobrallg0070@gmail.com",
        "Sobrenome": "Mendonça",
        "Produto": {
          "_id": "5cfc0ca0ec3dc51064514ab7",
          "Nome": "Pacote de fralda G + Touca",
          "Escolhido": true,
        },
        "Cadastro": "2019-07-15T12:59:43.955-03:00",
      }
    ]
  }

  statusTable(status: any) {
    console.log(status)
  }

}
