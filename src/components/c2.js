import add from '../modules/add';
import sub from '../modules/sub';
import { Component } from 'preact';


function c2() {
  console.log("c2 :" + add(102,465), sub(10,10))
}

export {c2}