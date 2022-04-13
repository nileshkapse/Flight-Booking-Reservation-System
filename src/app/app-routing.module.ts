import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';

const routes: Routes = [
  { path: 'flight-history', component: FlightHistoryComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
