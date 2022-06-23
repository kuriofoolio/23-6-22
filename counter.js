let input= document.querySelector('input');
let f_button = document.querySelector('.five');
let s_button = document.querySelector('.ten');
let t_button = document.querySelector('.fifteen');
let ans= document.querySelector('p');
let num= parseInt(input);

f_button.addEventListener('click',()=>{ 
    let answer =num + 5;
  ans.innerText=`when you add 5, answer is ${answer}`;
});

s_button.addEventListener('click',()=>{ 
    let answer =num + 10;
    ans.innerText=`when you add 10, answer is ${answer}`;
  });

  t_button.addEventListener('click',()=>{ 
    let answer =num + 15;
    ans.innerText=`when you add 15, answer is ${answer}`;
  });

