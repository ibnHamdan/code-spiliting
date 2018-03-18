import add from '../modules/add';
import multi from '../modules/multi';
import { divid } from '../modules/divid'

function c3(){
  console.log("c3: " + add(123,89), multi(102,465), divid(10,10));
}

export {c3}
