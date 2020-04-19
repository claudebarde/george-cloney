import { MichelsonV1Expression } from "@taquito/rpc";
import { Dispatch, SetStateAction } from "react";

export interface WizardControlsProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  code: MichelsonV1Expression[];
  launchNetwork: string;
  signer: string;
  currentStep: number;
}