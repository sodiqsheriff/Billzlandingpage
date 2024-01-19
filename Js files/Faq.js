
var discounted = document.querySelectorAll('.discounted');
var arr = Array();
discounted.forEach(element => {
    arr.push(element);
    element.addEventListener('click', ()=>{
        var content= document.getElementById(`content-${arr.indexOf(element)}`);
        if (content.style.display === 'none'){
            content.style.display = 'block';
            element.src = './images/vector2.png';
        }
        else{
            content.style.display = 'none';
            element.src = './images/vector.png';
        }
   })
});