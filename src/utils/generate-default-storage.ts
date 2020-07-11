import { Tezos, MichelsonMap } from "@taquito/taquito";
import { Schema } from "@taquito/michelson-encoder";

interface Storage {
  [property: string]: any;
}
// BigMap:  "KT1HqWsXrGbHWc9muqkApqWu64WsxCU3FoRf"
// "KT1Q5Je6M3TocfMo9khKvUzXEGCh1HmXdABS";
// USDtz KT1LN4LPSqTMS7Sd2CJw4bbDGRkMv2t68Fy9
// tzBTC KT1PWx2mnDueood7fEmfbBDKx1D9BAnnXitn
// StakerDAO KT1EctCuorV2NfVb1XTQgvzJ88MQtWP8cMMv

const generateDefaultStorage = async (address: string, contractNetwork: string) => {
  await Tezos.setProvider({
    rpc: `https://api.tez.ie/rpc/${contractNetwork}`,
  });

  const simpleTypes: string[] = ["address", "bool", "nat", "int", "string", "timestamp"];
  let defaultStorage: Storage = {};

  try {
    const contract = await Tezos.contract.at(address);
    // gets storage from contract
    const storage: any = await contract.storage();
    // gets storage from code
    const code: any = contract.script.code.find((x: any) => x.hasOwnProperty("prim") && x.prim === "storage");
    if (!code) throw new Error("No code available!");

    // gets storage schema
    const newSchema = new Schema(code.args[0]);
    const schema = newSchema.ExtractSchema();

    // loops through schema and populates default storage
    Object.keys(schema).forEach((key: string) => {
      const value: any = storage[key];
      if (simpleTypes.includes(schema[key])) {
        // simple types
        defaultStorage[key] = value;
      } else if (schema[key] === "set" && Array.isArray(value)) {
        // sets
        defaultStorage[key] = value;
      } else if (
        typeof schema[key] === "object" &&
        schema[key] !== null &&
        Object.keys(schema[key]).length === 1 &&
        Object.keys(schema[key])[0] === "map"
      ) {
        // maps
        // verifies value is a map
        if (MichelsonMap.isMichelsonMap(value)) {
          // copies map values
          const newMap: any = {};
          value.forEach((_value: string, _key: string) => {
            newMap[_key] = _value;
          });
          defaultStorage[key] = MichelsonMap.fromLiteral(newMap);
        }
      } else if (
        typeof schema[key] === "object" &&
        schema[key] !== null &&
        Object.keys(schema[key]).length === 1 &&
        Object.keys(schema[key])[0] !== "map"
      ) {
        // Empty BigMaps
        defaultStorage[key] = new MichelsonMap();
      }
    });
    return { status: "success", msg: defaultStorage };
  } catch (err) {
    return { status: "error", msg: err };
  }
};

export default generateDefaultStorage;