// const myFunc = (num: number): number => {
//     return num * num;
//   };
  
//   export default myFunc;

//=====================================================================//

// import arrays from './utilities/arrays.js';
// import numbers from './utilities/numbers.js';
// import strings from './utilities/strings.js';

// const numArr = [3, 4, 5, 6];
// const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ('15' as unknown) as number % 2;
// const five = parseInt('5');


// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(five, 8));
// console.log(arrays.lgNum(mixArr));

//=====================================================================//

/** Use Axios to get data from restcountries api */
// import axios from 'axios';

// /** Use the free API https://restcountries.eu/
//  * You will use the following endpoints
//  * https://restcountries.eu/rest/v2/name/{name} for countries by name
//  * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
//  */

// /** Create getCountry Function here */
// async function getCountry(name: string){
//     const getApi = await axios(`https://restcountries.eu/rest/v2/name/${name}`);
//     const data = getApi.data;
//     return {
//         capital : data.capital,
//         region: data.region,
//         numericCode: data.numericCode
//     }
// }

// /** Create a test for this getRegion function */
// async function getRegionCountries(regionalbloc: string) {
//   const getApi = await axios(
//     `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
//   );
//   const data = getApi.data;
//   const countries = [];
//   for (let i = 0; i < data.length; i++) {
//     countries.push(data[i].name);
//   }
//   return countries;
// }

// /** Create getRegionCapitals function here */
// async function getRegionCapitals(regionalbloc: string){
//     const countryEndpoints = await getRegionCountries(regionalbloc);
//     const promises = countryEndpoints.map((endpoint: any) => 
//        axios(`https://restcountries.eu/rest/v2/name/${endpoint}`
//     ));
//     const arr = await Promise.all(promises);
//     const capitals = [];
//     for (let i=0; i < arr.length; i++) {
//         capitals.push(arr[i].data[0].capital);
//     }
//     return capitals;
// }


// export default {
//   getCountry,
//   getRegionCountries,
//   getRegionCapitals
// };

//=====================================================================//

import express from 'express';

const app = express();
const port = 5000;

//set endpoint:
app.get('/api', (req, res) => {
    res.send("Hello World");
});

//check for port to avoid already in use error testing:
app.listen(port, () => {console.log(`Listening on port ${port}`)});

export default app;

