//your code here
let arr=['img1','img2','img3','img4','img5'];
let ct=0;

let index=parseInt(Math.random()*4+0);
// console.log(arr[index]);

let img6=document.createElement('img');
img6.classList.add(arr[index]);
document.getElementById('imgdiv').append(img6);

document.querySelectorAll('img').forEach((currimg)=>{
   currimg.addEventListener('click',(event)=>{
    event.target.classList.add('selected');
    ct++;
    if(ct==1) {
      document.getElementById('reset').style.display='inline-block';
    }
    
    if(ct==2) {
      document.getElementById('verify').style.display='inline-block';
    }
    if(ct>2) {
      document.getElementById('verify').style.display='none';
    }

  })
})

document.getElementById('reset').addEventListener('click',resetclick);

function resetclick (event) {
  ct=0;
  document.getElementById('verify').style.display='none';
  Array.from(document.getElementsByClassName('selected')).forEach((elem)=>{elem.classList.remove('selected');})
  if(document.getElementById('para')){document.getElementById('para').remove()};
}

document.getElementById('verify').addEventListener('click',(event)=>{
  let arr=Array.from(document.getElementsByClassName('selected'));
  if(arr[0].className===arr[1].className)
  {
    let p=document.createElement('p');
    p.id='para';
    p.innerText='You are a human. Congratulations!';
    document.getElementsByTagName('body')[0].append(p);
  }
  else {
    let p=document.createElement('p');
    p.id='para';
    p.innerText="We can't verify you as a human. You selected the non-identical tiles.";
    document.getElementsByTagName('body')[0].append(p);
  }
})

