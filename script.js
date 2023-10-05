
function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  let randomImageRock = "rock.png" 
  let ImageSource1 = "img/" + randomImageRock; 

  randomImageHand = "hand.png" 
  let ImageSource2 = "img/" + randomImageHand; 

  randomImageScissor = "scissor.jpg" 
  let ImageSource3 = "img/" + randomImageScissor;



  // Update images
   // Print the winner. Use if statement or other appropriate logic.
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  if (random1 === 1 && random2 === 1) 
    {
      document.querySelector("h1").innerHTML = "Its a tie !";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource1);

    } 
  
  else if (random1 === 1 && random2 === 2)
    {
      document.querySelector("h1").innerHTML = " Player 2 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

    }

  else if (random1 === 1 && random2 === 3)
    {
      document.querySelector("h1").innerHTML = " Player 1 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource3);
    }

  else if (random1 === 2 && random2 === 1)
    {
      document.querySelector("h1").innerHTML = " Player 1 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource2);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource1);
    }
  else if (random1 === 2 && random2 === 2) 
  {
    document.querySelector("h1").innerHTML = "Its a tie !";
    document.querySelectorAll("img")[0].setAttribute("src", ImageSource2);
    document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);
  }

  else if (random1 === 2 && random2 === 3)
    {
      document.querySelector("h1").innerHTML = " Player 2 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource2);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource3);
    }

  else if (random1 === 3 && random2 === 1)
    {
      document.querySelector("h1").innerHTML = " Player 2 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource3);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource1);
    }

  else if (random1 === 3 && random2 === 2)
    {
      document.querySelector("h1").innerHTML = " Player 1 Wins!";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource3);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);
    }
  
  else if (random1 === 3 && random2 === 3) 
    {
      document.querySelector("h1").innerHTML = "Its a tie !";
      document.querySelectorAll("img")[0].setAttribute("src", ImageSource3);
      document.querySelectorAll("img")[1].setAttribute("src", ImageSource3);
    }
}
