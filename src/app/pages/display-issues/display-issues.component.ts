import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ADMIN_ROLE } from 'src/app/constants/IMPData';
import { IssueService } from 'src/app/services/Issue/issue.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css'],
})
export class DisplayIssuesComponent implements OnInit {
  user: any[];
  issues: any[];

  displayModal = false;
  constructor(
    private toastr: ToastrService,
    private issueService: IssueService,
    private userService: UserService,
    private router: Router
  ) {
    this.issues = [];
    this.user = [];
  }

  ngOnInit(): void {
    this.userService
      .getCurrentUser()
      .subscribe((userData) => (this.user = userData));

    if (this.user.length > 0) {
      if (this.user[0].role !== ADMIN_ROLE) {
        this.router.navigate(['/']);
        return;
      }
    }

    this.displayModal = true;

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
        this.displayModal = false;
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
        this.displayModal = false;
      }
    );
  }
}
