import { EbgStepTwo } 
from '../interfaces/EbgStepTwo.interface';


export class EbgStepTwoGroup {
  data = {
    frequency: '',
    output: '',
    hpOutput: '',
  } as EbgStepTwo;
  isValid = false;
}
