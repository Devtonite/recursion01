import { Field, isReady, shutdown } from 'snarkyjs';
import { SimpleProgram } from './recursion01.js';

(async function main() {
  await isReady;
  console.log('SnarkyJs Loaded.');

  const { verificationKey } = await SimpleProgram.compile();
  await SimpleProgram.compile();
  console.log('Compiled and verification key generated:');
  console.log(verificationKey.toString());

  const proof = await SimpleProgram.run(Field(5));
  console.log('Proof generated:');
  console.log(proof.toJSON());

  await shutdown();
})();
