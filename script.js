let count = 0;
    let tia = document.getElementById("dhika");

    function increment() {
      count++;
      tia.innerHTML = count;
    }

    function decrement() {
      count--;
      tia.innerHTML = count;
    }
    
    function reset() {
      count = 0;
      tia.innerHTML = count;
    }