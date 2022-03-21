

function goToSchool() {
    return new Promise(function(resolve){
        resolve("학교에 갑니다.");
    });
}

function arriveAtSchool_tobe() {
    return new Promise(function(resolve){
        resolve("학교에 도착했습니다.");
    });
}

function study() {
    return new Promise(function(resolve){
        resolve("열심히 공부를 합니다.");
    });
}

goToSchool()
    .then(function (text) {
        console.log(text);
    });