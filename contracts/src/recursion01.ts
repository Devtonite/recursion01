import { Experimental, Field, Poseidon, Struct, UInt32 } from 'snarkyjs';

export class gameState extends Struct({
  solutionHash: Field,
  lastGuess: Field,
  numTurns: UInt32,
}) {}

export const SimpleProgram = Experimental.ZkProgram({
  publicInput: gameState,

  methods: {
    initState: {
      privateInputs: [Field, Field],

      method(publicInput: gameState, salt: Field, winningNum: Field) {
        publicInput.solutionHash = Poseidon.hash([salt, winningNum]);
        publicInput.lastGuess = Field(-1);
        publicInput.numTurns = UInt32.from(0);
      },
    },

    // base: {
    //   privateInputs: [Field],

    //   method(publicInput: Field, guessToWin: Field) {
    //     const valHere = publicInput
    //     publicInput.assertEquals(0)
    //     guessToWin.assertGte(0)
    //     guessToWin.assertLte(100)

    //     publicInput = valHere.add(1)
    //     publicInput.
    //   },
    // },

    // step: {
    //   privateInputs: [SelfProof],

    //   method(publicInput: Field, earlierProof: SelfProof<Field>) {
    //     earlierProof.verify();
    //     earlierProof.publicInput.add(2).assertEquals(publicInput);
    //   },
    // },

    // checkGuess: {
    //   privateInputs: [Field,SelfProof],

    //   method(publicInput: Field, myGuess: Field, earlierProof: SelfProof<Field>){
    //     publicInput.assertEquals(publicInput)
    //     const valHere = publicInput
    //     publicInput = valHere.add(1)
    //   }
    // }
  },
});
