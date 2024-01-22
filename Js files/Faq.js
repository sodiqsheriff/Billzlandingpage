
var discounted = document.querySelectorAll('.discounted');
var arr = Array();
discounted.forEach(element => {
    arr.push(element);
    element.addEventListener('click', ()=>{
        discounted.forEach(e => {
            let dis= document.getElementById(`content-${arr.indexOf(e)}`);
            dis.style.display = 'none';
            e.src = './images/vector.png';
        });
        var content= document.getElementById(`content-${arr.indexOf(element)}`);
        content.style.display = 'block';
        element.src = './images/vector2.png';
   })
});