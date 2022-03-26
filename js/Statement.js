function statement(invoices, plays) {
    let result = `청구 내역 (고객명: ${invoices.customer}\n`

    for (let perf of invoices.performances) {
        result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    }

    result += `총액: ${usd(totalAmount())}\n`
    result += `적립 포인트: ${totalVolumeCredits()}점\n`;
    return result;


    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }

    function amountFor(aPerformance) { //값이 바뀌지 않는 변수는 매개변수로 전달
        let result = 0; // 변수를 초기화하는 코드들
        switch (playFor(aPerformance).type) {
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
                throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`)
        }

        return result;
    }

    function volumeCreditsFor(aPerformance) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
            {style: "currency", currency: "USD", minimumFractionDigits: 2})
            .format(aNumber/100);
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of invoices.performances) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function totalAmount() {
        let result = 0;
        for (let perf of invoices.performances) {
            result += amountFor(perf)
        }
        return result;
    }
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
