function getstyle(obj,st){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[st];
    }else{
        return obj.currentStyle[st];
    }
}

function ani(obj,st,val,time,fun){
    var w=getstyle(obj,st);
    var targetWidth=val;
    var t=parseInt(time,10);
    var x=0;
    if(targetWidth>parseInt(w,10)){
        var move=setInterval(function(){
            x++;
            if(x>=targetWidth-parseInt(w,10)){
                clearInterval(move);
                fun();
                obj.style[st]=targetWidth+"px";
            }
            obj.style[st]=parseInt(w,10)+x+"px";
        },t);
    }else{
        var move=setInterval(function(){
            x++;
            if(parseInt(w,10)-x<=targetWidth){
                clearInterval(move);
                fun();
                obj.style[st]=targetWidth+"px";
            }
            obj.style[st]=`${parseInt(w, 10) - x}px`;
        },t);
    }

    
}

function resetClassName(myElement,myClassName){
    var len=myElement.length;
    for(i=0;i<len;i++){
        myElement[i].className = myClassName;
    }
}

