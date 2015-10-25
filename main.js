var num_one;
var num_two;
var operator;
var answer=0;


function getNumOper(numberOne){
  numberOne.addEventListener("click", function(){               //this function is allowing when a button is clicked
    num_one=Number(document.getElementById("result").value);    //to be put in the result box, and then when another
    document.getElementById("result").value= "";                //button is clicked it stores the OG value.
    operator = numberOne.value;
  });
}



document.addEventListener("DOMContentLoaded", function(){


function clickHandler(event){                                   //this function is saying that when an element id
  event.addEventListener("click", function(){                   //input is clicked on the value of that input will
    document.getElementById('result').value += event.value;     //show up in the result box.
  });
};
clickHandler(document.getElementById("num1"));
clickHandler(document.getElementById("num2"));
clickHandler(document.getElementById("num3"));
clickHandler(document.getElementById("num4"));
clickHandler(document.getElementById("num5"));
clickHandler(document.getElementById("num6"));
clickHandler(document.getElementById("num7"));
clickHandler(document.getElementById("num8"));
clickHandler(document.getElementById("num9"));
clickHandler(document.getElementById("num0"));
clickHandler(document.getElementById("num."));
getNumOper(document.getElementById("divide"));
getNumOper(document.getElementById("multiply"));
getNumOper(document.getElementById("subtract"));
getNumOper(document.getElementById("add"));

document.getElementById("equals").addEventListener("click", function(){   //this function is saying that when an
  num_two= Number(document.getElementById("result").value);               //operator is used to give the result a
    if (operator ==="/"){                                                 //value
      answer = num_one/num_two;
    }
    else if (operator ==="*"){
      answer = num_one*num_two;                                           //the if and else statements are allowing
    }                                                                     //the browser to go through each operation
    else if (operator ==="+"){                                            //until it finds the one you have inputed
      answer = num_one+num_two;
    }
    else if (operator ==="-"){
      answer = num_one-num_two;
    }

    document.getElementById("result").value = answer;
})

document.getElementById("clear").addEventListener("click", function(){    //this function is making the clear button
  document.getElementById("result").value = "";                           //display nothing until an input is given.
});                                                                       //making it clear with an empty string.

});
