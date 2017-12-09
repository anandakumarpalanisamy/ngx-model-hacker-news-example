import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxModelModule } from 'ngx-model';

import { BackendService } from './backend/backend.service';
import { TimeService } from './util/time.service';
import { ScrollService } from './util/scroll.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxModelModule],
  declarations: [],
  providers: [BackendService, TimeService, ScrollService]
})
export class CoreModule {}
