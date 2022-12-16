import { Experimental, Int64, SelfProof } from 'snarkyjs';

export const SimpleProgram = Experimental.ZkProgram({
  publicInput: Int64,

  methods: {
    base: {
      privateInputs: [],

      method(publicInput: Int64) {
        publicInput.assertEquals(Int64.from(0));
      },
    },

    step: {
      privateInputs: [SelfProof],

      method(publicInput: Int64, earlierProof: SelfProof<Int64>) {
        earlierProof.verify();
        earlierProof.publicInput.add(2).assertEquals(publicInput);
      },
    },
  },
});
