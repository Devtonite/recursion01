import { Int64, isReady, shutdown } from 'snarkyjs';
import { SimpleProgram } from './recursion01.js';

(async function main() {
  await isReady;
  console.log('SnarkyJs Loaded.');

  console.log('Compiling...');
  const { verificationKey } = await SimpleProgram.compile();
  console.log('Compiled and verification key generated:');
  console.log(verificationKey.toString());

  // 1st user Field input
  const proof0 = await SimpleProgram.base(Int64.from(0));
  console.log('Proof generated:');
  console.log(proof0.toJSON());

  // 2nd user Field input
  const proof1 = await SimpleProgram.step(Int64.from(2), proof0);
  console.log('Proof generated:');
  console.log(proof1.toJSON());

  await shutdown();
})();
