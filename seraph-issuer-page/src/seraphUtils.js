import { SeraphIDIssuer } from "@sbc/seraph-id-sdk";
import { GOVERNMENT_SCRIPT_HASH, NEO_RPC_URL, NEOSCAN_URL } from "./config";

export const createClaim = () => {
  const address = window.seraphID.getAddress();
  const issuer = new SeraphIDIssuer(
    GOVERNMENT_SCRIPT_HASH,
    NEO_RPC_URL,
    NEOSCAN_URL
  );
  issuer.registerNewSchema(
    "passport",
    ["firstName", "lastName", "age"],
    true
  );
  var claim = issuer.createClaim(
    Math.floor(Math.random() * (10000 - 0) + 0),
    "passport",
    { firstName: "John", lastName: "Doe", age: 26 },
    "did:neo:priv:".concat(address)
  );
  return claim;
};
