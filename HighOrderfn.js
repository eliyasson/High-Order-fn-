const companies = [
    {name: "Nokia", catagory: "Technology", start: 1865, end: 2013},
    {name: "Samsung", catagory: "Finance", start: 1890, end: 2010},
    {name: "Toyota", catagory: "auto", start: 1980, end: 2013},
    {name: "Stockman", catagory: "Business", start: 1985, end: 2017},
    {name: "Hsl", catagory: "Transport", start: 1855, end: 2001},
    {name: "Kone", catagory: "Lift", start: 1996, end: 2020}
];

const ages = [33, 12, 20, 30, 54, 21, 61, 13, 15, 45, 70, 65, 13];

const company = companies.filter(item => {
    if(item.end >= 2010 && item.end < 2017){
        return true;
    }
});
//console.log(company);

const technologyCompany = companies.filter(item => item.catagory === "Technology");
//console.log(technologyCompany);

const testMap = companies.map(item => `${item.name} [${item.start} - ${item.end}]`);
//console.log(testMap);

const agesSquare = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
//console.log(agesSquare);

/* const sortedCompanies = companies.sort(function(a, b2) {
    if(a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sortedCompanies); */
// OR
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//console.log(sortedCompanies);

const sortAges = ages.sort();
//const sortAges = ages.sort((a,b) => b - a); //descending to ascending
//console.log(sortAges);

const ageSum = ages.reduce((total, age) => total + age, 0);
//console.log(ageSum);

const totatYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totatYears);

const combined = ages 
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => b - a)
    .reduce((a, b) => a + b, 0)

console.log(combined);