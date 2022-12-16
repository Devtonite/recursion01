import { Experimental, Field, Int64, Poseidon, Struct } from 'snarkyjs';

export const SimpleProgram = Experimental.ZkProgram({
  publicInput: Int64,

  methods: {
    // base: {
    //   privateInputs: [],

    //   method(publicInput: Int64) {
    //     publicInput.assertEquals(Int64.from(0));
    //   },
    // },

    // step: {
    //   privateInputs: [SelfProof],

    //   method(publicInput: Int64, earlierProof: SelfProof<Int64>) {
    //     earlierProof.verify();
    //     earlierProof.publicInput.add(2).assertEquals(publicInput);
    //   },
    // },

    init: {
      privateInputs: [answer],
    },
  },
});

class answer extends Struct({
  salt: Field,
  numToWin: Int64,
}) {}

export function hashItbruh(input: answer) {
  return Poseidon.hash([input.salt, input.numToWin.toField()]);
}
