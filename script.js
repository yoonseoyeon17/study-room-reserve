// 1. 예약된 좌석을 기록할 빈 리스트(배열)를 만듭니다.
// 이 배열이 데이터베이스 역할을 합니다.
const reservedSeats = [];

function makeReservation() {
    // 2. 사용자가 입력한 값을 가져옵니다.
    const seatInput = document.getElementById('seat-number');
    const studentIdInput = document.getElementById('student-id');
    const nameInput = document.getElementById('student-name');
    
    const seat = seatInput.value;
    const studentId = studentIdInput.value;
    const name = nameInput.value;

    // 3. 입력값이 비어있는지 확인합니다.
    if (!seat || !studentId || !name) {
        alert('모든 정보를 정확하게 입력해주세요!');
        return;
    }
    
    // 4. 좌석 번호가 유효한지 확인합니다. (1~40)
    const seatNum = parseInt(seat);
    if (isNaN(seatNum) || seatNum < 1 || seatNum > 40) {
        alert('좌석 번호는 1부터 40 사이의 숫자로 입력해주세요.');
        return;
    }

    // 5. ★★★★★ (핵심 기능) 이미 예약된 좌석인지 확인합니다. ★★★★★
    // reservedSeats 배열에 현재 입력한 좌석 번호가 있는지 검사합니다.
    if (reservedSeats.includes(seatNum)) {
        alert(`죄송합니다. ${seatNum}번 좌석은 이미 예약된 자리입니다. 다른 좌석을 선택해주세요.`);
        return; // 예약 절차를 중단합니다.
    }

    // 6. 예약이 성공하면, 이 좌석 번호를 reservedSeats 배열에 추가합니다.
    reservedSeats.push(seatNum);
    console.log("현재 예약된 좌석들:", reservedSeats); // 개발자용 확인 로그 (F12 누르면 보임)

    // 7. 예약 완료 메시지를 생성하여 화면에 보여줍니다.
    const resultDiv = document.getElementById('result-message');
    resultDiv.innerHTML = `
        <p style="color: green;">
            ✅ <strong>${name}(${studentId})</strong> 님, 
            <strong>${seatNum}번</strong> 좌석 예약이 완료되었습니다.
        </p>
        <p style="font-size: 0.8em; color: #555;">
            (10분 내에 입실 QR코드를 인증하지 않으면 자동 취소됩니다.)
        </p>
    `;

    // 8. 입력창을 깨끗하게 비워줍니다.
    seatInput.value = '';
    studentIdInput.value = '';
    nameInput.value = '';
}