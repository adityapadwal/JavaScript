// Do again
function fetchData(callback) {
    setTimeout(() => {
        const data = "Async Operation 1 Complete";
        callback(data);
    }, 2000);
}

function processData(data, callback) {
    setTimeout(() => {
        const processedData = data + ", Async Operation 2 Complete";
        callback(processedData);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData((result1) => {
    processData(result1, (result2) => {
        displayData(result2);
    });
});