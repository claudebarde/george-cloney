import React, { ReactElement, useEffect, useRef } from "react";
import Creatable from "react-select/creatable";
import {
  generateNetworkSelectValue,
  networkSelectOptions,
  networkSelectStyles
} from "../../utils/custom-network-select";
import LoadingSpinner from "../LoadingSpinner";
import ToolTipComponent from "../Tooltip";
import { ContractOriginationFormProps } from "./types";
import { useForm } from "react-hook-form";
import { TEST_NETWORKS } from "../../utils/constants";
import "./styles.css";
import { BeaconWallet } from "@taquito/beacon-wallet";

const ContractOriginationForm = (props: ContractOriginationFormProps): ReactElement | null => {
  const {
    setupSigner,
    setLoadingMessage,
    handleNetworkChange,
    setSigner,
    setCurrentStep,
    handleLaunchSubmit,
    signer,
    txnAddress,
    loadingMessage,
    network,
    currentStep
  } = props;
  const { register, handleSubmit, errors } = useForm();

  const beaconWalletType = useRef();

  // Check to see if Chrome Extension is installed, maybe handy later
  useEffect(() => {
    (async () => {
      // checks if Beacon is available
      const beaconWallet = new BeaconWallet({ name: "George Cloney" });
      beaconWalletType.current = await (beaconWallet.client as any).transport;
    })();
  }, []);

  // Handle snackbar on errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setLoadingMessage("");
    }
  }, [errors, setLoadingMessage]);

  // Make sure signer is setup for ephemeral automatically for Test Network
  useEffect(() => {
    if (TEST_NETWORKS.includes(network) && signer === "") {
      setupSigner("ephemeral");
      setSigner("ephemeral");
    }
  }, [network, setSigner, setupSigner, signer]);

  const handleChange = (selectedOption: any): void => {
    if (loadingMessage) return;
    handleNetworkChange(selectedOption.value);
  };

  const locallyUpdateSigner = async (e: React.MouseEvent<HTMLInputElement>): Promise<void> => {
    if (loadingMessage) return;
    if (e.currentTarget.value === "ephemeral") {
      setupSigner("ephemeral");
      setSigner("ephemeral");
    }
    if (e.currentTarget.value === "beacon") {
      setupSigner("beacon");
      setSigner("beacon");
    }
    if (e.currentTarget.value === "tezbridge") {
      setupSigner("tezbridge");
      setSigner("tezbridge");
    }
    if (e.currentTarget.value === "thanos") {
      setupSigner("thanos");
      setSigner("thanos");
    }
  };

  if (currentStep !== 3) return null;
  return (
    <>
      <span onClick={() => setCurrentStep(2)} className="left"></span>
      <div id="dialog">
        <h2>
          <span>
            <span>Originate Contract</span>
            <ToolTipComponent
              title={
                <>
                  <h3>Step 3:</h3>
                  <h3>Originate (aka Deploy) a clone of this contract</h3>
                  <p>
                    {
                      "In this step, George Cloney will help you clone the fetched and reviewed smart contract to any Tezos network."
                    }
                  </p>
                  <p>
                    {"Mr. Cloney will also allow you to choose any method to sign the transaction that you please!"}
                  </p>
                </>
              }
              placement="bottom"
            />
          </span>
        </h2>
        <label id="react-select-label">Choose Network</label>
        <Creatable
          styles={networkSelectStyles}
          name="address"
          ref={register}
          className="network-select"
          options={networkSelectOptions}
          value={generateNetworkSelectValue(network)}
          onChange={handleChange}
        />
        <label id="react-select-signer-label">Choose Signer</label>
        <label className="signer-toolbar">
          {TEST_NETWORKS.includes(network) && (
            <>
              <input onClick={locallyUpdateSigner} value="ephemeral" id="ephemeral" type="radio" />
              <label
                className={signer === "ephemeral" ? "signer-button-selected" : "signer-button"}
                htmlFor="ephemeral"
              >
                Let Us Sign
              </label>
            </>
          )}
          <input onClick={locallyUpdateSigner} value="beacon" id="beacon" type="radio" />
          <label className={signer === "beacon" ? "signer-button-selected" : "signer-button"} htmlFor="beacon">
            Beacon
          </label>
          <input onClick={locallyUpdateSigner} value="tezbridge" id="tezbridge" type="radio" />
          <label className={signer === "tezbridge" ? "signer-button-selected" : "signer-button"} htmlFor="tezbridge">
            TezBridge
          </label>
        </label>
        <div id="content">
          <div id="contract-launch-form">
            <form onSubmit={handleSubmit(handleLaunchSubmit)}>
              {loadingMessage ? (
                <LoadingSpinner className="loading-spinner-origination" />
              ) : (
                <input
                  disabled={signer === "" || loadingMessage ? true : false}
                  id="show-balance-button"
                  type="submit"
                />
              )}
            </form>
          </div>
        </div>
      </div>
      {txnAddress.length > 0 ? (
        <span onClick={() => setCurrentStep(4)} className="right-next-step"></span>
      ) : (
        <span className="right"></span>
      )}
    </>
  );
};

export default ContractOriginationForm;
