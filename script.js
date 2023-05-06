let count = 0;
    let awal = document.getElementById("awal");

    function increment() {
      count++;
      awal.innerHTML = count;
    }

    function decrement() {
      count--;
      awal.innerHTML = count;
    }