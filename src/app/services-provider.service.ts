import { Injectable } from '@angular/core';

@Injectable()
export class ServicesProviderService {

  constructor() {}
  getServices(){
    return 'test Service'    
  }
}
