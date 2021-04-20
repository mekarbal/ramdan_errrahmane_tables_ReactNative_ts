import { AuthI } from '../interfaces/auth-i';

export class Auth implements AuthI {
    id: number;
    email: string;
    password: string;

  constructor(o?: Partial<Auth>) {
    if (o){
      Object.assign(this, o);
    }
  }

  hola(){
      console.log('test hola')
  }
}
