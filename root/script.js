getData();
let form = document.getElementById("f1");
form.onsubmit = (evt)=>{
    // evt.preventDefault();
    postData();
}

function postData(){
    let myheaders = new Headers();
    myheaders.append("Content-Type","application/json")
    fetch("http://localhost:3000/data",{
        method:"post",
        body:JSON.stringify({
            "title":form.children[0].value,
            "desc":form.children[1].value
        }),
        headers:myheaders
    })
    .then((res)=>res.text())
    .then((data)=>{
        if(data == "ok"){
            console.log(data);
        }
    })
}
function getData(){
    fetch("http://localhost:3000/data")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        makeList(data);
    })
}

let divList = document.createElement("div");
function makeList(data){
    let str = "";
    data.forEach(ele => {
        str += "<div class='card'>" + "<h3>"+ ele["title"] + "</h3>";
        str += "<h5>"+ele["desc"]+"</h5></div>";
    });
    divList.innerHTML= str;
    // console.log("yeh toh ho gya");
    document.body.append(divList);
}