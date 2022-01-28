console.log("我是qq空间");
const request = new XMLHttpRequest()
request.open('GET', './friend.json')
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response);
    }
}
request.send()
