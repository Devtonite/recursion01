import { Field, isReady, shutdown } from 'snarkyjs';
import { SimpleProgram } from './recursion01.js';
import { tic, toc } from './tictoc.js';

(async function main() {
  tic('SnarkyJs Loading');
  await isReady;
  toc();

  tic('Compiling');
  const { verificationKey } = await SimpleProgram.compile();
  toc();

  console.log('Compiled and verification key generated:');
  console.log(verificationKey.toString());

  // 1st user Field input
  tic('proof0');
  const proof0 = await SimpleProgram.base(Field(0), Field(75));
  toc();
  console.log('Proof generated:');
  console.log(proof0.toJSON());

  // 2nd user Field input
  // const proof1 = await SimpleProgram.step(Int64.from(2), proof0);
  // console.log('Proof generated:');
  // console.log(proof1.toJSON());

  await shutdown();
})();
