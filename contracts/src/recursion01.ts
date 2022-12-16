import { Experimental, Field, isReady, shutdown } from 'snarkyjs';

(async function main() {
  const SimpleProgram = Experimental.ZkProgram({
    publicInput: Field,

    methods: {
      run: {
        privateInputs: [],

        method(publicInput: Field) {
          publicInput.assertLt(10);
        },
      },
    },
  });

  await isReady;
  console.log('SnarkyJs Loaded.');

  // const { verificationKey } = await SimpleProgram.compile()
  await SimpleProgram.compile();
  console.log('Compiled and verification key generated:');

  const proof = await SimpleProgram.run(Field(5));
  console.log('Proof generated:');
  console.log(proof.toJSON());

  await shutdown();
})();
