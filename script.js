let count = 0;
    let counter = document.getElementById("awal");

    function increment() {
      count++;
      counter.innerHTML = count;
    }

    function decrement() {
      count--;
      counter.innerHTML = count;
    }