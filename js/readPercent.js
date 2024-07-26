window.onscroll = percent;// 执行函数
// 页面百分比
function percent () {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
    result = Math.round(a / b * 100), // 计算百分比
    up = document.querySelector("#go-up") // 获取按钮

  if (result <= 95) {
    up.childNodes[0].style.display = 'none'
    up.childNodes[1].style.display = 'block'
    up.childNodes[1].innerHTML = result;
  } else {
    up.childNodes[1].style.display = 'none'
    up.childNodes[0].style.display = 'block'
  }
}

// 发现有时会和当前页面重复，加一个判断,随机页面代码
function randomPost () {
  fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
    let ls = data.querySelectorAll('url loc');
    while (true) {
      let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
      if (location.href == url) continue;
      location.href = url;
      return;
    }
  })
}