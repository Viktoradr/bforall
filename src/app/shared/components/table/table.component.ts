import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { TableService } from './table.service';

export interface Header {
  title: string,
  param: string,
  actions?: [
    {
      title: string,
      handler: any,
      icon: string,
      class: string,
      isButton: boolean
    }
  ]
}

@Component({
  selector: 'v-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input('keyId') keyId: string;
  @Input('data') data: any[];
  @Input('headers') headers: Header[];
  @Input('pagination') pagination: boolean;
  @Input('rows') rows: number;
  @Input('sortable') sortable: boolean;
  @Input('searchable') searchable?: boolean;

  @Output() status = new EventEmitter();

  list: any[];
  listSearch: any[];
  pages: number[];
  pageActive: number;
  pager: any;
  search: string;

  constructor(private service: TableService) {
    this.listSearch = [];
    this.list = [];
    this.pages = [];
    this.pager = {};
  }

  ngOnInit() {
    this.feedback();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.rows = this.rows == undefined ? 10 : this.rows;
    this.mapList();
    this.setPage(1);
  }

  mapList() {
    this.data.forEach((obj: any) => {
      let temp: any = {
        actions: []
      };

      for (let header of this.headers) {
        //console.log(header.actions, header)
        if (header.actions != undefined) {
          temp.actions = header.actions;
        }
        else
          temp = this.mapear(temp, obj, header);
      }
        
      this.listSearch.push(temp);
    });

    console.log(this.listSearch)

    this.list = this.listSearch;
  }

  feedback() {
    this.status.emit({
      "keyId": this.keyId,
      "sortable": this.sortable,
      "pagination": this.pagination,
      "pager": this.service.getPager(this.list.length, this.pageActive)
    })
  }

  searching(value: any) {
    this.filter(value);
  }

  setValue(header: any, obj: any) {
  
      var hasDot = header.param.includes('.');

      if (hasDot) {
        var v = header.param.split('.');
        if (Array.isArray(obj[v[0]])) return obj[v[0]];
        else if (obj[header.param] == undefined) return obj[v[0]];
      }
      else return obj[header.param];
  }

  setPage(page: number) {
    this.pageActive = page;
    this.pager = this.service.getPager(this.list.length, page);
    this.listSearch = this.list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  getKey(obj: any, param: any) {
    return Object.keys(obj[param])
  }

  getValue(item: any, param: number): any {
    return Object.values(item)[param];
  }

  getParamValue(item: any, param: number, index: number) {
    const key: any = this.getKey(this.headers, index)[0];
    return item[key];
  }

  mapear(temp: any, obj: any, header: any) : any {
    var hasDot = header.param.indexOf('.');

    if (hasDot != -1) {
      var v = header.param.split('.');
      
      if (Array.isArray(obj[v[0]])) {
        if (typeof obj[v[0]][0] === 'object') {
          temp[v[0]] = '';
          for (let itemArray of obj[v[0]]) {
            //console.log(itemArray[v[1]]);
            temp[v[0]] += `${itemArray[v[1]]}, `; 
          }
        }
        else temp[v[0]] = obj[v[0]];
      }
      else if (typeof obj[v[0]] === 'object') temp[v[0]] = obj[v[0]][v[1]];
    }
    else temp[header.param] = obj[header.param];

    return temp;
  }

  filter(input: any) {
    let lista = [];

    this.list.forEach((item: any) => {
      let search = false;

      // Pensar em alguma formar de juntar todo o conteudo da lista e fazer o search
      for (let header of this.headers) {
        if (header.actions == undefined) {
          let t = header.param.split('.');
          search = search ? true : item[t[0]].includes(input);
        }
      }

      if (search)
        lista.push(item);
    });

    this.listSearch = lista;

    if(input == '') this.listSearch = this.list;
  }
}
