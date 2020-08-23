import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../state';

@Component({
  selector: 'app-ebgheader',
  templateUrl: './ebgheader.component.html',
  styleUrls: ['./ebgheader.component.scss']
})
export class EbgheaderComponent implements OnInit {
  ebgmainGroupIsValid$ = this.store.select(
    fromRoot.selectEbgMainGroupIsValid
  );
  ebgsteptwoGroupIsValid$ = this.store.select(fromRoot.selectEbgStepTwoGroupIsValid);
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
  }

}

