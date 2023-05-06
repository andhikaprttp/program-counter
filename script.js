let count = 0;
    let awal = document.getElementById("counter");

    function increment() {
      count++;
      awal.innerHTML = count;
    }

    function decrement() {
      count--;
      awal.innerHTML = count;
    }