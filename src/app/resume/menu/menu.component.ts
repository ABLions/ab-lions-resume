import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit{
  items!: MenuItem[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
      this.items = [
          {
              icon: 'pi pi-pencil',
              command: () => {
                  this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
              }
          },
          {
              icon: 'pi pi-refresh',
              command: () => {
                  this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
              }
          },
          {
              icon: 'pi pi-trash',
              command: () => {
                  this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
              }
          },
          {
              icon: 'pi pi-upload',
              routerLink: ['/fileupload']
          },
          {
              icon: 'pi pi-external-link',
              target: '_blank',
              url: 'https://www.linkedin.com/in/anderbell7/'
          }
      ];
    }
}
