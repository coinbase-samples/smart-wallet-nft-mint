import AccountConnect from "../../components/header/AccountConnect";

function NotConnected() {
  return (
    <div className="flex items-center justify-start gap-8">
      <span className="text-xl">Please connect your wallet to continue. </span>
      <div><AccountConnect /></div>
    </div>);
}

export default NotConnected;
