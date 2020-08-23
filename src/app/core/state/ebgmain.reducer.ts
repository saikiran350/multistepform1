import { createReducer, on } from '@ngrx/store';
import { EbgMainActions } from '../../components/ebg-main/actions'
import { EbgMain } from '../interfaces/ebgMain.interface';
import { EbgMainGroup } from '../models/ebgMain.model';

export interface State {
  data:  EbgMain;
  isValid: boolean;
}

const initialState = new EbgMainGroup();

const ebgMainReducer = createReducer(
  initialState,
  on(
    EbgMainActions.patch,
    (state: State, action: ReturnType<typeof EbgMainActions.patch>) => ({
      ...state,
      data: { ...state.data, ...action.payload }
    })
  ),
  on(
    EbgMainActions.changeValidationStatus,
    (
      state: State,
      { isValid }: ReturnType<typeof EbgMainActions.changeValidationStatus>
    ) => ({
      ...state,
      isValid
    })
  )
);

export function reducer(state: State, action: EbgMainActions.Union) {
  return ebgMainReducer(state, action);
}

export const selectEbgMainGroupData = (state: State) => state.data;
export const selectEbgMainGroupIsValid = (state: State) => state.isValid;