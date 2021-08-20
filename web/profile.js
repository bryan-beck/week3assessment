const button = (e) => {
    const theme = e.target.textContent;
    document.querySelector("color").className = buttons;
    document.querySelector("place").className = buttons;
    document.querySelector("ritual").className = buttons;
  
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < Button.length; i++) {
      button["color"].addEventListener("click", alert("my Favorite color is Green"));
      button["place"].addEventListener("click", alert("my Favorite place is Home"));
      button["ritual"].addEventListener("click", alert("my Favorite ritual is mahasamadhi"));
      
    }

  };