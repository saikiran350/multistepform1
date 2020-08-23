import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/state';
import { EbgStepTwo } from '../../core/interfaces/ebgsteptwo.interface';
import { take, map, distinctUntilChanged } from 'rxjs/operators'
import { EbgStepTwoActions } from './actions';
import { merge } from 'rxjs';


@Component({
  selector: 'app-ebgsteptwo',
  templateUrl: './ebgsteptwo.component.html',
  styleUrls: ['./ebgsteptwo.component.scss']
})
export class EbgStepTwoComponent implements OnInit {

  ebgsteptwoform = this.fb.group(
    {
      frequency: [null, [Validators.required]],
      output: [null, [Validators.required]],
      hpOutput: [null, [Validators.required]]
    },
    {
      updateOn: 'blur'
    }
  )

  frequencyCtrl = this.ebgsteptwoform.get('frequency');
  outputCtrl = this.ebgsteptwoform.get('output');
  hpOutputCtrl = this.ebgsteptwoform.get('hpOutput');
  submitted = false;


  constructor(private router: Router,
    private fb: FormBuilder,
    private store: Store<fromRoot.State>) { }


  ngOnInit() {
    this.store
      .select(fromRoot.selectEbgStepTwoGroupData)
      .pipe(take(1))
      .subscribe((ebgsteptwo: EbgStepTwo) =>
        this.ebgsteptwoform.patchValue(ebgsteptwo, { emitEvent: false })
      );

    const frequency$ = this.frequencyCtrl.valueChanges.pipe(
      map((frequency: string) => ({ frequency } as Partial<EbgStepTwo>))
    );
    const output$ = this.outputCtrl.valueChanges.pipe(
      map((output: string) => ({ output } as Partial<EbgStepTwo>))
    );
    const hpOutput$ = this.hpOutputCtrl.valueChanges.pipe(
      map((hpOutput: string) => ({ hpOutput } as Partial<EbgStepTwo>))
    );

    merge(frequency$, output$, hpOutput$).subscribe(
      (payload: Partial<EbgStepTwo>) => {
        this.store.dispatch(EbgStepTwoActions.patch({ payload }));
      }
    );

    this.ebgsteptwoform.valueChanges
      .pipe(
        map(() => this.ebgsteptwoform.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          EbgStepTwoActions.changeValidationStatus({ isValid })
        )
      );
  }

  goToNextStep() {
    if (this.ebgsteptwoform.invalid) {
      this.submitted = true;
      return;
    }
    this.router.navigate(['ebgStep3']);
    // this.submitted = true;
    // return;
  }

  goToBackStep() {
    alert("navigate to back method");
    this.router.navigate(['ebgmain']);
  }


}
