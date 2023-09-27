// tools to clean vanilla js up a touch

var $=x=>document.querySelectorAll(x),
    $$=x=>[...$(x)],
    $0=x=>document.querySelector(x),
    WFE= async (a,z=100,b=10000)=>{for(const c=Date.now();Date.now()-c<b;){const b=$0(a);if(b)return b;await new Promise(a=>setTimeout(a,z))}return null};
$.map = (x,fn)=>$$(x).map(fn||(z=>z));
$.filter = (x,fn)=>$$(x).filter(fn||(z=>z));
