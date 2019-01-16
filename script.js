function createNode(element){
    return document.createElement(element);
}
function append(parent , el)
{
    return parent.appendChild(el);
}
const ul = document.getElementById("demo");
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let demo = data.results;
    console.log("result", demo)
    return demo.map(function(demo){

        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
        img.src = demo.picture.thumbnail;
        span.innerHTML=`${demo.name.first} ${demo.name.last} `;
        append(li,img);
        append(li,span);
        append(ul,li);
        // console.log(span);
        console.log(
            "My name is %s and I am %s \n",
            demo.name.first + " " + demo.name.last,
            demo.gender);
    })
})
.catch(function(error){
    console.log(JSON.stringify(error));
});