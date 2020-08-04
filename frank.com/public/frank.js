// AJAX方式
// const request = new XMLHttpRequest()
// request.open('get', 'http://qq.com:8888/qq.json')
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
//     console.log(request.response);
//   }
// }

// request.send()


//JSONP方式
const random = Math.random()
console.log(random);

window[random] = (data) => {
  console.log(data);
}
const script = document.createElement('script')
script.src = `http://qq.com:8888/qq.js?callback=${random}`
script.onload = () => {
  script.remove()
}
document.body.appendChild(script)
