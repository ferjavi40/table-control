import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    items: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Mesas',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Disponibles',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Reservadas',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Plantas',
                        icon: 'pi pi-fw pi-trash',
                        items:[
                            {
                                label:'Planta 201',
                                icon: 'pi pi-fw pi-bookmark',
                                items:[
                                    {
                                        label:'Zona 370',
                                        icon: 'pi pi-fw pi-bookmark'
                                    }
                                ]
                            },
                            {
                                label:'Planta 202',
                                icon: 'pi pi-fw pi-bookmark',
                                items:[
                                    {
                                        label:'Zona 371',
                                        icon: 'pi pi-fw pi-bookmark'
                                    }
                                ]
                            },
                            {
                                label:'Planta 203',
                                icon: 'pi pi-fw pi-bookmark',
                                items:[
                                    {
                                        label:'Zona 372',
                                        icon: 'pi pi-fw pi-bookmark'
                                    }
                                ]
                            },
                        ]
                    }
                    
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            }


        ];
    }

}
