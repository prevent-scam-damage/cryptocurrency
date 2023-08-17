document.getElementById('connectButton').addEventListener('click', function() {
    var walletName = prompt("Enter your wallet name:");
    if (walletName !== null && walletName.trim() !== "") {
        connectToWallet(walletName);
    } else {
        alert("Please enter a valid wallet name.");
    }
});

function connectToWallet(walletName) {
    // Fetch API를 사용하여 FastAPI 백엔드에 요청을 보냄
    fetch('/connect_wallet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ walletName: walletName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Connected to Wallet: " + walletName);
        } else {
            alert("Failed to connect to wallet.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while connecting to the wallet.");
    });
}
