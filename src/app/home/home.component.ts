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
      },
      {
        title: "Array",
        param: "Lista.param"
      },
      {
        title: "Actions",
        actions: [
          {
            title: "Adicionar",
            handler: (item: any, index: number) => {
              this.add(item, index)
            },
            icon: "add",
            class: "success",
            isButton: false
          },
          {
            title: "Remover",
            handler: (item: any, index: number) => {
              this.remover(item, index)
            },
            icon: "delete",
            class: "danger",
            isButton: true
          },
          {
            title: "Editar",
            handler: (item: any, index: number) => {
              this.editar(item, index)
            },
            icon: "edit",
            class: "primary",
            isButton: true
          }
        ]
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
        "Lista": [
          "Teste 1",
          "Teste 2",
          "Teste 3",
          "Teste 4",
          "Teste 5",
          "Teste 6"
        ],
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
        "Lista": [
          {"param": 1},
          {"param": 2},
          {"param": 3},
          {"param": 4},
          {"param": 5},
          {"param": 6},
        ],
        "Cadastro": "2019-07-19T10:25:37.094-03:00",
      }
    ]
  }

  statusTable(status: any) {
    console.log(status)
  }

  add(item: any, index: number) {
    console.log('add', item)
  }
  
  remover(item: any, index: number) {
    console.log('remover', item)
    this.lista.splice(index, 1);
  }

  editar(item: any, index: number) {
    console.log('editar', item)
  }
}
