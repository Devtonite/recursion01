import { Experimental, Field } from 'snarkyjs';

export const SimpleProgram = Experimental.ZkProgram({
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
