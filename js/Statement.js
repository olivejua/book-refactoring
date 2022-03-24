
function amountFor(aPerformance, play) { //값이 바뀌지 않는 변수는 매개변수로 전달
    let result = 0; // 변수를 초기화하는 코드들
    switch (play.type) {
        case "tragedy":
            result = 40000
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 1000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${play.type}`)
    }

    return result;
}

function statement(invoices, plays) {
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }

    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoices.customer}\n`

    for (let perf of invoices.performances) {
        let thisAmount = amountFor(perf, playFor(perf));

        // 포인트 적립
        volumeCredits += Math.max(perf.audience - 30, 0);
        //희극 관객 5명 마다 추가 포인트 제공
        if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);

        //청구 내역 출력
        result += `${playFor(perf).name}: ${format(thisAmount/100)} (${perf.audience}석)\n`;
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
