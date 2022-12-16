import { Experimental, Field, SelfProof } from 'snarkyjs';

export const SimpleProgram = Experimental.ZkProgram({
  publicInput: Field,

  methods: {
    base: {
      privateInputs: [],

      method(publicInput: Field) {
        publicInput.assertEquals(Field(0));
      },
    },

    step: {
      privateInputs: [SelfProof],

      method(publicInput: Field, earlierProof: SelfProof<Field>) {
        earlierProof.verify();
        earlierProof.publicInput.add(1).assertEquals(publicInput);
      },
    },
  },
});
