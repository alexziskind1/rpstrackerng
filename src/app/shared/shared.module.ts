import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PresetFilterComponent } from './components/preset-filter/preset-filter.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ModalComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        //NgbModule
    ],
    exports: [
        FormsModule,
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent,
        ModalComponent,
        //NgbModule
    ],
    declarations: [
        MainMenuComponent,
        SideMenuComponent,
        PresetFilterComponent,
        ModalComponent
    ],
    providers: [],
})
export class SharedModule { }
