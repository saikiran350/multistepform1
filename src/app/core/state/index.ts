import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import * as fromEbgMain from './ebgmain.reducer';
import * as fromEbgStepTwo from './ebgsteptwo.reducer';
import { EbgMainGroup } from '../models/ebgmain.model';
import { EbgStepTwoGroup} from '../models/ebgsteptwo.model';

export interface State {
  ebgmain: EbgMainGroup;
  ebgsteptwo: EbgStepTwoGroup;
}


export const reducers: ActionReducerMap<State> = {
  ebgmain: fromEbgMain.reducer,
  ebgsteptwo: fromEbgStepTwo.reducer
};


export const metaReducers: MetaReducer<State>[] = [];

export const selectEbgMainGroup = (state: State) => state.ebgmain;
export const selectEbgMainGroupData = createSelector(
  selectEbgMainGroup,
  fromEbgMain.selectEbgMainGroupData
);
export const selectEbgMainGroupIsValid = createSelector(
  selectEbgMainGroup,
  fromEbgMain.selectEbgMainGroupIsValid
);

export const selectEbgStepTwoGroup = (state: State) => state.ebgsteptwo;
export const selectEbgStepTwoGroupData = createSelector(
  selectEbgStepTwoGroup,
  fromEbgStepTwo.selectEbgStepTwoGroupData
);
export const selectEbgStepTwoGroupIsValid = createSelector(
  selectEbgStepTwoGroup,
  fromEbgStepTwo.selectEbgStepTwoGroupIsValid
);


