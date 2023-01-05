console.log(location);

console.log(location.protocol);
console.log(location.path);

location = 'https://www.google.com';

location.href = 'https://www.google.com';
location.assign('https://www.google.com');//option to visit previous page also using back button
location.replace('https://www.google.com');//replace last page with current page