

    //function addElement() {
      //  var kgf2=document.createElement('a');
        //var textNode=document.createTextNode('Go to Google');
        //kgf2.appendChild(textNode);
        //kgf2.setAttribute("href",'https://www.google.come');
        
        //var bodyElement=document.getElementsByTagName('body');
        //var bodyTag=bodyElement[0];
    
        //bodyTag.appendChild(kgf2);
        //buttonElement.setAttribute('disabled','disabled');
    
    //let buttonElement=document.getElementById('show-btn');
    //console.log(buttonElement);
    //buttonElement.addEventListener ('click', addElement );

    //let buttonElement=document.getElementById('btn');
    //function addHtml() {
    
    let kgf=document.createElement('a');
    let textNode=document.createTextNode('Go to Google');
    kgf.appendChild(textNode);
    kgf.setAttribute('href','https://www.google.com');
    
    bodyElement=document.getElementsByTagName('body');
    let bodyTag=bodyElement[0];
    bodyTag.appendChild(kgf);
    buttonElement.setAttribute('disabled','disabled')
    
    
   // console.log(buttonElement);
    buttonElement.addEventListener('click',addHtml);


