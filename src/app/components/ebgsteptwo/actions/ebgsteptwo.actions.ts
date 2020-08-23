import { createAction, props } from '@ngrx/store';
import { EbgStepTwo } from '../../../core/interfaces/ebgsteptwo.interface';

export const patch = createAction(
  '[EbgStepTwo Page] Patch Value',
  props<{ payload: Partial<EbgStepTwo> }>()
);

export const changeValidationStatus = createAction(
  '[EbgStepTwo Page] Change Validation Status',
  props<{ isValid: boolean }>()
);

export type Union = ReturnType<typeof patch | typeof changeValidationStatus>;