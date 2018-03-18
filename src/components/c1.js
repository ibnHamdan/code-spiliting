import add from '../modules/add';
import multi from '../modules/multi';
import sub from '../modules/sub';

const c11 = 30;
//const {operations} = require('../modules/operations')

function c1() {
  console.log("c1 :" + add(11,11) + " multi: " + multi(11, 11)+ " sub: " + sub(11, 11)
)
}
export {c1, c11}