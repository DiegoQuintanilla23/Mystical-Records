import { Component } from '@angular/core';
import { ClasifTableComponent } from '../../../components/admin/clasif-table/clasif-table.component';

@Component({
  selector: 'app-view-class',
  standalone: true,
  imports: [ClasifTableComponent],
  templateUrl: './view-class.page.html',
  styleUrl: './view-class.page.css'
})
export class ViewClassPage {

}
