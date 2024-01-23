
async function applepost() {
    const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-01-22&to=2024-01-22&sortBy=popularity&apiKey=9bd0ffef29914a7c8c6a8492eb2e72e1`)
    const news = await response.json();
    const articl = news.articles;
    console.log(articl);
    let result = articl.map(function (ele) {
        let name = ele.source.name
        return `<option> ${name}</option>`
    }).join("");
    document.querySelector("select").innerHTML = result
    let subsy = document.querySelector(".vlayform");

    subsy.onsubmit = function (e) {
        e.preventDefault();
        let element = e.target.elements;
        console.log(element)
        let showdata = {
            showname: element['sel'].value,
        }
        let resshow = articl.find(function (ele) {
            return ele.source.name ===showdata.showname;
        } )
        console.log(resshow)
        if (resshow) {
            let resultHtml = `
                <tr>
                    <td>${resshow.author}</td>
                    <td>${resshow.title}</td>
                    <td>${resshow.description}</td>
                    <td><a href="${resshow.url}">${resshow.url}</a></td>
                    <td><img src="${resshow.urlToImage}" alt="News Image" class="deimg"/></td>
                </tr>`;
            document.querySelector(".bodydata").innerHTML = resultHtml;
        }
        document.querySelector(".bodydata").innerHTML = resiltname

}

}
    applepost();
 