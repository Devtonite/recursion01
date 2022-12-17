import { Experimental, Field, Poseidon, SelfProof } from 'snarkyjs';

export const SimpleProgram = Experimental.ZkProgram({
  publicInput: Field,

  methods: {
    base: {
      privateInputs: [Field],

      method(publicInput: Field, guessToWin: Field) {
        return Poseidon.hash([publicInput, guessToWin]);
      },
    },

    step: {
      privateInputs: [SelfProof],

      method(publicInput: Field, earlierProof: SelfProof<Field>) {
        earlierProof.verify();
        earlierProof.publicInput.add(2).assertEquals(publicInput);
      },
    },
  },
});
