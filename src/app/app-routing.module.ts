import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './dashboard/account-settings/account-settings.component';
import { FlightHistoryComponent } from './dashboard/flight-history/flight-history.component';

const routes: Routes = [
  { path: 'flight-history', component: FlightHistoryComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
