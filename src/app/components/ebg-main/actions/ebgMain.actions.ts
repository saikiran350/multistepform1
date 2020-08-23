import { createAction, props } from '@ngrx/store';
import { EbgMain } from '../../../core/interfaces/ebgmain.interface';

export const patch = createAction(
  '[EbgMain Page] Patch Value',
  props<{ payload: Partial<EbgMain> }>()
);

export const changeValidationStatus = createAction(
  '[EbgMain Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;