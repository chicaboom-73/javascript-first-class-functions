function receivesAFunction(func){
   
       let spy = func;
       spy();    
}

function returnsANamedFunction(){
        return function namedFunction(){

        }
}
function returnsAnAnonymousFunction(){
       return function(){
               
       }
}