import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH, TOKEN_PREFIX } from 'src/app/constants/IMPData';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: any[];

  constructor(private http: HttpClient) {
    this.issues = [];
  }

  getIssues() {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/issue/getissues`,
      {},
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }

  addIssue(issue: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/issue/addissue`,
      {
        issue: issue,
      },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }
}
