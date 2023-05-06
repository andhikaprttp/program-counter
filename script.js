var count = 0;
    var counter = document.getElementById("counter");

    function increment() {
      count++;
      counter.innerHTML = count;
    }

    function decrement() {
      count--;
      counter.innerHTML = count;
    }