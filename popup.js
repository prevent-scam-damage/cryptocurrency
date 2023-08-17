document.getElementById('connectButton').addEventListener('click', async () => {
    const accountNumber = document.getElementById('accountNumber').value;

    try {
        const response = await fetch('http://localhost:8080/checkAccount', {
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
        if (data.status === 1) {  // API 응답이 1인 경우
            alert("계좌 존재함");
        } else {
            alert("계좌를 찾을 수 없습니다.");
        }
    } catch (error) {
        alert("API와 연결할 수 없습니다.");
    }
});
