var marks = {
    ravi: 24;
    shubam: 43;    
}
console.log(marks);



const forwarderOrigin = 'http://localhost:9010';




const initialize = () => {

    const connectButton = document.getElementById('connectWallet');
    const {ethereum} = window;
    const onboardMetaMaskClient = async() => {
        if(!isMetamaskInstalled()) {
            console.log("MetaMask is not installed :(");
            consoleButton.VAalue = "Click here  to install  metamask";
            connectButton.onclick = installMetaMask;
        } else {
            console.log("MetaMask is installed");
            connectButton.onClick = connectMetaMask();
        }
    }

    const connectMetaMask = async () => {
        connectButton.disabled = true;
        try {
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            connectButton.Value = "Connected";
            console.log("accounts: ",accounts);
            connectButton.Value = false;
        } catch(err) {
            console.error("error occured while  connecting to Metamask: ",err)
        }
    }

    const isMetamaskInstalled = () {
        return ethereum && ethereum.isMetaMask;
    }

    const installMetaMask = () => {
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        connectButton.Value = "Installation in progress";
        connectButton.disabled=true;
        onboarding.startOnboarding();

    }

    onboardMetaMaskClient();
};
window.addEventListener('DOMContentLoaded', initialize);