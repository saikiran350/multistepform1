import { createReducer, on } from '@ngrx/store';
import { EbgStepTwoActions } from 'src/app/components/ebgsteptwo/actions'
import { EbgStepTwo } from '../interfaces/ebgsteptwo.interface';
import { EbgStepTwoGroup} from '../models/ebgsteptwo.model';

export interface State {
  data:  EbgStepTwo;
  isValid: boolean;
}

const initialState = new EbgStepTwoGroup();

const EbgStepTwoReducer = createReducer(
  initialState,
  on(
    EbgStepTwoActions.patch,
    (state: State, action: ReturnType<typeof EbgStepTwoActions.patch>) => ({
      ...state,
      data: { ...state.data, ...action.payload }
    })
  ),
  on(
    EbgStepTwoActions.changeValidationStatus,
    (
      state: State,
      { isValid }: ReturnType<typeof EbgStepTwoActions.changeValidationStatus>
    ) => ({
      ...state,
      isValid
    })
  )
);

export function reducer(state: State, action: EbgStepTwoActions.Union) {
  return EbgStepTwoReducer(state, action);
}

export const selectEbgStepTwoGroupData = (state: State) => state.data;
export const selectEbgStepTwoGroupIsValid = (state: State) => state.isValid;