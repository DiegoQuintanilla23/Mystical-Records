import { Component } from '@angular/core';
import { ClasifTableComponent } from '../../../components/admin/clasif-table/clasif-table.component';
import { Classification } from '../../../interfaces/classification.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-class',
  standalone: true,
  imports: [ClasifTableComponent, FormsModule],
  templateUrl: './view-class.page.html',
  styleUrl: './view-class.page.css'
})
export class ViewClassPage {
  public classifications:Classification[] = [];
  public NwClass:Classification = {
    name:'',
  };
  public Added:boolean = false;

  constructor( private http: HttpClient, public UserService : UserService){}

  ngOnInit() {
    this.executeFetch();
  }

  private executeFetch(): void {
    this.http.get("http://localhost:8080/api/classifications").subscribe(
      {
        next:(response:any)=>{
          //console.log(response);
          this.classifications=response.result;
        },
        error:(error:any)=>{
          console.log(error);
        }
      }
    )
  }

  public AddClassification(): void{
    const token = localStorage.getItem("AuthToken") ?? "";
    const userId = this.UserService.ActiveUser._id;
    if(token==""||userId==""||this.NwClass.name=="")
    {
      return;
    }
    this.http.post("http://localhost:8080/api/classifications",this.NwClass,{
      headers:{
        "Authorization": token,
      }
      }).subscribe({
      next: (response: any) => {
        this.Added = true;
        this.executeFetch();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
