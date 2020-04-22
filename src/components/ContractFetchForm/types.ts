import { Dispatch, SetStateAction } from "react";

export interface ContractFormProps {
  handleNetworkChange: (network: string) => void;
  updateContractAddress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleContractSubmit: () => void;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
  contractAddress: string;
  network: string;
  validationError: string;
  loading: boolean;
}