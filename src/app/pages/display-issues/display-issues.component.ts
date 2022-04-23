import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IssueService } from 'src/app/services/Issue/issue.service';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css'],
})
export class DisplayIssuesComponent implements OnInit {
  issues: any[];
  constructor(
    private toastr: ToastrService,
    private issueService: IssueService
  ) {
    this.issues = [];
  }

  ngOnInit(): void {
    this.issueService.getIssues().subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Issues Successfully');
          this.toastr.success('Issues Successfully', 'Success');
          console.log(result.data);
          this.issues = result.data;
        } else {
          console.log('Error', result.err.writeErrors[0].errmsg);
          this.toastr.error('Error', result.err.writeErrors[0].errmsg);
        }
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
      }
    );
  }
}
