// var promise = new Promise(function(resolve, reject) {
// const x = "geeksforgeeks";
// const y = "geeksforgeeks"
// if(x === y) {
// 	resolve();
// } else {
// 	reject();
// }
// });
	
// promise.
// 	then( (result) => {
// 		console.log('Success, You are a GEEK');
// 	}).
// 	catch( (err) => {
// 		console.log('Some error has occurred');
// 	});

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
        
promise.
    then((result) => {
        return 1+1;
    }).
	then((ans) => {
        return ans+10;
    }).
	then((ans) => {
        console.log(ans);
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
