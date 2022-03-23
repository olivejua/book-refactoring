
function amountFor(perf, play) { //값이 바뀌지 않는 변수는 매개변수로 전달
    let thisAmount = 0; // 변수를 초기화하는 코드들
    switch (play.type) {
        case "tragedy":
            thisAmount = 40000
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 1000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${play.type}`)
    }

    return thisAmount;
}

function statement(invoices, plays) {
    console.log('statement in')
    console.log(invoices);
    console.log(plays);

    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoices.customer}\n`

    for (let perf of invoices.performances) {
        const play = plays[perf.playID]
        let thisAmount = amountFor(perf, play);

        // 포인트 적립
        volumeCredits += Math.max(perf.audience - 30, 0);
        //희극 관객 5명 마다 추가 포인트 제공
        if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

        //청구 내역 출력
        result += `총액: ${format(thisAmount/100)} (${perf.audience}석)\n`;
        totalAmount += thisAmount
    }

    result += `총액: ${format(totalAmount/100)}\n`
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}



function run() {
    getJSONValue('/json/invoices.json')
        .then(invoices => {
            getJSONValue('/json/plays.json')
                .then(plays => {
                    const result = statement(invoices[0], plays);
                    console.log(result);
                })
        })
}

run();