//@ts-check
//Set needed variables
let operatorpicked = false;   
let whatoperator = '';
let operator = '';  
let firstnumber = ''; 
let secondnumber = '';   


// Getting all of the needed elements
let displayvalue = document.getElementById('display');  
let numbers = document.querySelectorAll('button.number');   
let operators = document.querySelectorAll('button.operator');  
let equal = document.getElementById('equal')   
let clear = document.querySelector('button.clear');

class Calculator { 
   
    constructor(firstnumber , secondnumber, operator) {   
           this.firstnumber = firstnumber;  
           this.secondnumber = secondnumber;  
           this.operator = operator;
    }
    
    append(number) { 
      if(operatorpicked == false) { 
          firstnumber = firstnumber + number;
      }  
      else{ 
          secondnumber = secondnumber + number;
      }
    }    

    display() { 
        if(operatorpicked == false) { 
           displayvalue.innerText = firstnumber;
        }  
        else{ 
           displayvalue.innerText = secondnumber;
        }
    }
    
     add( firstnumber, secondnumber) { 
        return firstnumber + secondnumber;
    }

     subtract(firstnumber , secondnumber) { 
        return firstnumber - secondnumber;
    } 

     multiply(firstnumber , secondnumber) { 
        return firstnumber * secondnumber;
    } 

     divide(firstnumber , secondnumber) { 
        return firstnumber/secondnumber;
    }     

      
}    
    let calc = new Calculator(firstnumber,secondnumber,operator);  
    
    function operate(operator) { 
     switch(operator){
        case '+':    
            return calc.add(parseInt(firstnumber), parseInt(secondnumber));
            break;
        case '-': 
            return calc.subtract(parseInt(firstnumber), parseInt(secondnumber));
            break;
        case 'x':  
            return calc.multiply(parseInt(firstnumber), parseInt(secondnumber));
            break;
        case '/':
            return calc.divide(parseInt(firstnumber), parseInt(secondnumber));
            break; 

}
    
}
     numbers.forEach(button => {
         button.addEventListener('click', ()=> { 
            calc.append(button.innerHTML); 
            calc.display();
         })
     })  

     operators.forEach(button => {     
         button.addEventListener('click', ()=> {  
         if(whatoperator == '') {     
            operatorpicked = true;    
            whatoperator = button.innerHTML; 
              
         }
         else {   
            
            displayvalue.innerText = operate(whatoperator);   
            firstnumber = displayvalue.innerText;
            secondnumber = '';
            whatoperator = button.innerHTML;
        } 
         
          

         }) 
        
       
     })   
      
     equal.addEventListener('click',()=> { 
       
            displayvalue.innerText = operate(whatoperator);  
            operatorpicked = true; 
            firstnumber = displayvalue.innerText; 
            secondnumber = '';   
            whatoperator = '';
       
     })  
     clear.addEventListener('click',()=> { 
        displayvalue.innerText = '';   
        whatoperator = '';
        let operator = ''; 
        firstnumber = ''; 
        secondnumber = '';   
        operatorpicked = false;

        
     })  
