document.getElementById('connectButton').addEventListener('click', async () => {
    const accountNumber = document.getElementById('accountNumber').value;

    try {
        const response = await fetch('http://localhost:8080/connect_wallet', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ "accountNumber": accountNumber })
        });

        if (!response.ok) {
            throw new Error("API 응답 오류");
        }

        const data = await response.json();
        if (data.status === 'found') {
            alert("계좌 발견: " + data.data);
        } else {
            alert("계좌를 찾을 수 없습니다.");
        }
    } catch (error) {

        alert("API와 연결할 수 없습니다.");
    }
});
