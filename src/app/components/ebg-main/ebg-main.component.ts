import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../core/state';
import { EbgMainActions } from './actions';
import { map, take, distinctUntilChanged } from 'rxjs/operators';
import { merge } from 'rxjs';
import { EbgMain } from '../../core/interfaces/ebgmain.interface';

@Component({
  selector: 'app-ebg-main',
  templateUrl: './ebg-main.component.html',
  styleUrls: ['./ebg-main.component.scss']
})
export class EbgMainComponent implements OnInit {
  title = "EBg Main COmponent";
  submitted = false;

  ebgForm = this.fb.group(
    {
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [
        null,
        [Validators.required, Validators.min(18), Validators.max(120)]
      ],
      destCountry: [null, [Validators.required]],
      // nema: [null, [Validators.required]],
    },
    {
      updateOn: 'blur'
    }
  );

  firstNameCtrl = this.ebgForm.get('firstName');
  lastNameCtrl = this.ebgForm.get('lastName');
  ageCtrl = this.ebgForm.get('age');
  destCountryCtrl = this.ebgForm.get('destCountry');
  // nemaCtrl = this.ebgForm.get('nema');

  constructor(private fb: FormBuilder,
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }


  ngOnInit() {
    this.store
      .select(fromRoot.selectEbgMainGroupData)
      .pipe(take(1))
      .subscribe((ebgmain: EbgMain) =>
        this.ebgForm.patchValue(ebgmain, {
          emitEvent: false
        })
      );
    const firstName$ =
      this.firstNameCtrl.valueChanges.pipe(
        map((firstName: string) =>
          ({
            firstName
          } as Partial<EbgMain>))
      );
    const lastName$ =
      this.lastNameCtrl.valueChanges.pipe(
        map((lastName: string) => ({
          lastName
        } as Partial<EbgMain>))
      );
    const age$ =
      this.ageCtrl.valueChanges.pipe(
        map((age: number) => ({
          age
        } as Partial<EbgMain>))
      );
    const destCountry$ =
      this.destCountryCtrl.valueChanges.pipe(
        map((destCountry: string) => ({
          destCountry
        } as Partial<EbgMain>))
      );




    merge(firstName$, lastName$, age$, destCountry$).subscribe(
      (payload: Partial<EbgMain>) => {
        this.store.dispatch(EbgMainActions.patch({ payload }));
      }
    );
    this.ebgForm.valueChanges
      .pipe(
        map(() => this.ebgForm.valid),
        distinctUntilChanged()
      )
      .subscribe((isValid: boolean) =>
        this.store.dispatch(
          EbgMainActions.changeValidationStatus({ isValid })
        )
      );
  }

  goToNextStep() {
    alert("next button clicked");
    if (this.ebgForm.invalid) {
      this.submitted = true;
      return;
    }
    this.router.navigate(['ebgsteptwo']);
    // this.router.navigate(['ebgsteptwo']);
    // alert("moving from step1 to step2");
  }
}
