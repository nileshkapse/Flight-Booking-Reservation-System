import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IssueService } from 'src/app/services/Issue/issue.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  issue: string;

  constructor(
    private issueService: IssueService,
    private toastr: ToastrService
  ) {
    this.issue = '';
  }

  ngOnInit(): void {}

  handleFormSubmit() {
    this.issueService.addIssue(this.issue).subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Issue raised successfully');
          this.toastr.success('Issue raised successfully', 'Success');
          this.issue = '';
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
