import {CommonModule} from "@angular/common";
import {NgModule, ModuleWithProviders} from "@angular/core";
import {HouseholdUserBoxComponent} from "./component/household-user-box.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports:      [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        HouseholdUserBoxComponent
    ],
    exports: [
        HouseholdUserBoxComponent
    ]
})
export class CommonUiComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonUiComponentsModule,
        }
    }
}
