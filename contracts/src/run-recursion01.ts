import { Field, UInt32, isReady, shutdown } from 'snarkyjs';
import { SimpleProgram, gameState } from './recursion01.js';
import { tic, toc } from './tictoc.js';

(async function main() {
  tic('SnarkyJs Loading');
  await isReady;
  toc();

  tic('Compiling');
  await SimpleProgram.compile();
  toc();
  // console.log('Compiled and verification key generated:');
  // console.log(verificationKey.toString());

  let winState = new gameState({
    solutionHash: Field(0),
    lastGuess: Field(-1),
    numTurns: UInt32.from(0),
  });

  console.log(winState.solutionHash.toJSON());
  tic('proof0');
  // const proof0 =
  await SimpleProgram.initState(winState, Field(10), Field(75));
  toc();
  console.log(winState.solutionHash.toJSON());

  // 1st user Field input
  // tic('proof0');
  // const proof0 = await SimpleProgram.base(Field(0), Field(90));
  // toc();
  // console.log('Proof generated:');
  // console.log(proof0.toJSON());

  // 2nd user Field input
  // const proof1 = await SimpleProgram.step(Int64.from(2), proof0);
  // console.log('Proof generated:');
  // console.log(proof1.toJSON());

  // tic('proof1');
  // const proof1 = await SimpleProgram.checkGuess(Field(2), Field(75), proof0);
  // toc();
  // console.log('Proof generated:');
  // console.log(proof1.toJSON());

  await shutdown();
})();
