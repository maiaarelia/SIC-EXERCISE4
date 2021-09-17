

fetch('https://api.github.com/users/maiaarelia')
.then(responsi => responsi.json())
.then(dataku => {
    console.log(dataku)
    document.getElementById('nama').innerHTML  = dataku.name
    document.getElementById('status').innerHTML  = dataku.bio
    document.getElementById('statusakun').innerHTML  = dataku.type
    document.getElementById('namalogin').innerHTML  = dataku.login
    document.getElementById('name1').innerHTML  = dataku.name
    document.getElementById('id-github').innerHTML  = dataku.id
    document.getElementById('url-github').innerHTML  = dataku.url
    document.getElementById('fol').innerHTML  = dataku.followers
    document.getElementById('ling').innerHTML  = dataku.following
    document.getElementById('repository').innerHTML  = dataku.public_repos
})
// style.css

// header.css
document.getElementById("header").style.height = "50px";
document.getElementById("header").style.backgroundColor = "rgb(227, 170, 241)";
document.getElementById("header").style.color = "white";
document.getElementById("header").style.textAlign = "center";
document.getElementById("header").style.paddingTop = "25px";
document.getElementById("header").style.fontSize = "25px";
document.getElementById("header").style.fontFamily = "Rokkitt";


document.getElementById("gambar").style.height = "160px";
document.getElementById("gambar").style.backgroundColor = "rgb(232, 189, 243)";


document.getElementById("iu").style.borderRadius = "50%";
document.getElementById("iu").style.padding = "50px";


document.getElementById("nama").style.textAlign = "center";
document.getElementById("nama").style.fontFamily = "sofia";
document.getElementById("nama").style.fontSize = "33px";
document.getElementById("nama").style.paddingTop = "132px";


document.getElementById("status").style.textAlign = "center";
document.getElementById("status").style.fontFamily = "verdana";
document.getElementById("status").style.fontSize = "30px";
document.getElementById("status").style.color = "palevioletred";
document.getElementById("status").style.padding = "10px";


document.getElementById("h2").style.textAlign = "center";
document.getElementById("h2").style.fontFamily = "trirong";
document.getElementById("h2").style.backgroundColor = "rgb(207, 137, 224)";


document.getElementById("h3").style.textAlign = "center";
document.getElementById("h3").style.fontFamily = "trirong";
document.getElementById("h3").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("h4").style.textAlign = "center";
document.getElementById("h4").style.fontFamily = "trirong";
document.getElementById("h4").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("h5").style.textAlign = "center";
document.getElementById("h5").style.fontFamily = "trirong";
document.getElementById("h5").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("h6").style.textAlign = "center";
document.getElementById("h6").style.fontFamily = "trirong";
document.getElementById("h6").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("h7").style.textAlign = "center";
document.getElementById("h7").style.fontFamily = "trirong";
document.getElementById("h7").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("h8").style.textAlign = "center";
document.getElementById("h8").style.fontFamily = "trirong";
document.getElementById("h8").style.backgroundColor = "rgb(207, 137, 224)";


document.getElementById("h9").style.textAlign = "center";
document.getElementById("h9").style.fontFamily = "trirong";
document.getElementById("h9").style.backgroundColor = "rgb(207, 137, 224)";

document.getElementById("ava").style.borderRadius = "50%";
document.getElementById("ava").style.padding = "30px";
document.getElementById("ava").style.width ="250px";
document.getElementById("ava").style.paddingTop = "20px";

document.getElementById("namalogin").style.textAlign = "center";
document.getElementById("namalogin").style.fontFamily = "sofia";
document.getElementById("namalogin").style.fontSize = "33px";


document.getElementById("statusakun").style.textAlign = "center";
document.getElementById("statusakun").style.fontFamily = "verdana";
document.getElementById("statusakun").style.fontSize = "30px";
document.getElementById("statusakun").style.color = "palevioletred";
document.getElementById("statusakun").style.paddingBottom = "20px";

document.getElementById("kata").style.textAlign = "center";
document.getElementById("kata").style.fontFamily = "Grechen Fuemen";
document.getElementById("kata").style.fontSize = "30px";
document.getElementById("kata").style.color = "white";
document.getElementById("kata").style.paddingBottom = "20px";




document.getElementById("aboutgithub").style.marginTop = "3%";
document.getElementById("aboutgithub").style.display = "flex";
document.getElementById("aboutgithub").style.justifyContent = "space-around";


document.getElementById("username1").style.textAlign = "center";
document.getElementById("username1").style.fontFamily = "Domine";
document.getElementById("username1").style.fontSize = "30px";

document.getElementById('username').style.textAlign = "center";
document.getElementById('username').style.padding = "10px";
document.getElementById('username').style.borderRadius = "20px";

document.getElementById('name1').style.textAlign = "center";
document.getElementById('name1').style.padding = "10px";
document.getElementById('name1').style.borderRadius = "20px";
document.getElementById('name1').style.fontFamily = "Pathway Gothic One";
document.getElementById('name1').style.fontSize = "20px";

document.getElementById('button-name').style.borderRadius = "20px";
document.getElementById('button-name').style.border = "none";
document.getElementById('button-name').style.backgroundColor = "rgb(227, 170, 241)";
document.getElementById('button-name').style.boxShadow = "10px 5px 5px white";


document.getElementById("acc-github").style.flexBasis = "31%";
document.getElementById("acc-github").style.background = "rgb(232, 189, 243)";
document.getElementById("acc-github").style.borderRadius = "10px";
document.getElementById("acc-github").style.transition = "1s";
document.getElementById("acc-github").style.boxSizing = "border-box";
document.getElementById("acc-github").style.padding = "10px 7px";
document.getElementById("acc-github").style.boxShadow = "20px 20px 20px #b25ac9";


document.getElementById("git-id").style.textAlign = "center";
document.getElementById("git-id").style.fontFamily = "Domine";
document.getElementById("git-id").style.fontSize = "30px";


document.getElementById('id-github').style.textAlign = "center";
document.getElementById('id-github').style.padding = "10px";
document.getElementById('id-github').style.borderRadius = "20px"
document.getElementById('id-github').style.fontFamily = "Pathway Gothic One";
document.getElementById('id-github').style.fontSize = "20px";

document.getElementById('id').style.textAlign = "center";
document.getElementById('id').style.padding = "10px";
document.getElementById('id').style.borderRadius = "20px";


document.getElementById('button-id').style.borderRadius = "20px";
document.getElementById('button-id').style.border = "none";
document.getElementById('button-id').style.backgroundColor = "rgb(227, 170, 241)";
document.getElementById('button-id').style.boxShadow = "10px 5px 5px white";

document.getElementById("acc1-github").style.flexBasis = "25%";
document.getElementById("acc1-github").style.background = "rgb(232, 189, 243)";
document.getElementById("acc1-github").style.borderRadius = "10px";
document.getElementById("acc1-github").style.transition = "1s";
document.getElementById("acc1-github").style.boxSizing = "border-box";
document.getElementById("acc1-github").style.boxShadow = "20px 20px 20px #b25ac9";
document.getElementById("acc1-github").style.padding = "10px 7px";


document.getElementById("git-url").style.textAlign = "center";
document.getElementById("git-url").style.fontFamily = "Domine";
document.getElementById("git-url").style.fontSize = "30px";

document.getElementById('url-github').style.textAlign = "center";
document.getElementById('url-github').style.padding = "10px";
document.getElementById('url-github').style.borderRadius = "20px"
document.getElementById('url-github').style.fontFamily = "Pathway Gothic One";
document.getElementById('url-github').style.fontSize = "20px";

document.getElementById('url').style.textAlign = "center";
document.getElementById('url').style.padding = "10px";
document.getElementById('url').style.borderRadius = "20px";


document.getElementById('button-url').style.borderRadius = "20px";
document.getElementById('button-url').style.border = "none";
document.getElementById('button-url').style.backgroundColor = "rgb(227, 170, 241)";
document.getElementById('button-url').style.boxShadow = "10px 5px 5px white";


document.getElementById("acc2-github").style.flexBasis = "23%";
document.getElementById("acc2-github").style.background = "rgb(232, 189, 243)";
document.getElementById("acc2-github").style.borderRadius = "10px";
document.getElementById("acc2-github").style.transition = "1s";
document.getElementById("acc2-github").style.boxSizing = "border-box";
document.getElementById("acc2-github").style.boxShadow = "20px 20px 20px #b25ac9";
document.getElementById("acc2-github").style.padding = "10px 7px";

document.getElementById("another-git").style.marginTop = "3%";
document.getElementById("another-git").style.display = "flex";
document.getElementById("another-git").style.justifyContent = "space-around";

document.getElementById("pengikut").style.textAlign = "center";
document.getElementById("pengikut").style.fontFamily = "Domine";
document.getElementById("pengikut").style.fontSize = "30px";


document.getElementById('fol').style.textAlign = "center";
document.getElementById('fol').style.borderRadius = "20px";
document.getElementById('fol').style.fontFamily = "Pathway Gothic One";
document.getElementById('fol').style.fontSize = "20px";


document.getElementById("folls").style.flexBasis = "30%";
document.getElementById("folls").style.background = "rgb(232, 189, 243)";
document.getElementById("folls").style.borderRadius = "10px";
document.getElementById("folls").style.transition = "1s";
document.getElementById("folls").style.boxSizing = "border-box";
document.getElementById("folls").style.boxShadow = "20px 20px 20px #b25ac9";


document.getElementById("mengikuti").style.textAlign = "center";
document.getElementById("mengikuti").style.fontFamily = "Domine";
document.getElementById("mengikuti").style.fontSize = "30px";


document.getElementById('ling').style.textAlign = "center";
document.getElementById('ling').style.borderRadius = "20px";
document.getElementById('ling').style.fontFamily = "Pathway Gothic One";
document.getElementById('ling').style.fontSize = "20px";


document.getElementById("folling").style.flexBasis = "30%";
document.getElementById("folling").style.background = "rgb(232, 189, 243)";
document.getElementById("folling").style.borderRadius = "10px";
document.getElementById("folling").style.transition = "1s";
document.getElementById("folling").style.boxSizing = "border-box";
document.getElementById("folling").style.boxShadow = "20px 20px 20px #b25ac9";

document.getElementById("repo").style.textAlign = "center";
document.getElementById("repo").style.fontFamily = "Domine";
document.getElementById("repo").style.fontSize = "30px";


document.getElementById('repository').style.textAlign = "center";
document.getElementById('repository').style.borderRadius = "20px";
document.getElementById('repository').style.fontFamily = "Pathway Gothic One";
document.getElementById('repository').style.fontSize = "20px";


document.getElementById("repos").style.flexBasis = "30%";
document.getElementById("repos").style.background = "rgb(232, 189, 243)";
document.getElementById("repos").style.borderRadius = "10px";
document.getElementById("repos").style.transition = "1s";
document.getElementById("repos").style.boxSizing = "border-box";
document.getElementById("repos").style.boxShadow = "20px 20px 20px #b25ac9";


document.getElementById("button-name").addEventListener("click", handleClick);
function handleClick() {
      console.log("tes");
      alert("Username Github saya adalah : ARELIA MAIA ASHARY, Silahkan klik OK untuk mengunjungi akun github saya");
}

document.getElementById("button-id").addEventListener("click", handleClick);
function handleClick() {
      console.log("tes");
      alert("Id Github saya adalah : 88821251");
}

document.getElementById("button-url").addEventListener("click", handleClick);
function handleClick() {
      console.log("tes");
      alert("Url Github saya adalah : https://api.github.com/users/maiaarelia");
}