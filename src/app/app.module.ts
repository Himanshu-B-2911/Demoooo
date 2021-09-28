import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolutionComponent } from './interpolution/interpolution.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiCalssComponent } from './api-calss/api-calss.component';
import { NgxBootstrapComponent} from './ngx-bootstrap/ngx-bootstrap.component';

import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';



/* ngx-bootstrap*/
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ParentComponent } from './parent/parent.component';
import { IOParentComponent } from './io-parent/io-parent.component';
import { IOChildComponent } from './io-child/io-child.component';
import { Comp5Component } from './comp5/comp5.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { NgContentCardComponent } from './ng-content-card/ng-content-card.component';





@NgModule({
  declarations: [
    AppComponent,
    InterpolutionComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    ApiCalssComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    NgxBootstrapComponent,
    ParentComponent,
    IOParentComponent,
    IOChildComponent,
    Comp5Component,
    FormValidationComponent,
    NgContentCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   HttpClientModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
