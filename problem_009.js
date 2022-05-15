for (let i = 1; i < 1000; i++) {
  for (let j = 1; j < 1000; j++) {
    for (let k = 1; k < 1000; k++) {
      if (i + j + k == 1000) {
        if (i ** 2 + j ** 2 == k ** 2) {
          console.log([i, j, k, i * j * k]);
        }
      }
    }
  }
}
