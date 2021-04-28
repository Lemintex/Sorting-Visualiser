//2715375
class selectionSort {
  constructor() {
  }

  async sort(){
    algorithmName = "Selection Sort";
    algorithmDesc = "This sort works by storing the first location of the unsorted part of the array and comparing its value to the value next to it. If the one next to it is smaller, its location is stored. This repeats until the smallest values location is stored, which is then swapped with the leftmost location of the unsorted partition. This is repeated until the list is sorted."
    algorithmVid = "https://www.youtube.com/embed/g-PGLbMth_g";
    values = shuffle(init);
    for (var i = 0; i < values.length; i++) {
      var min = i;
      state[min] = 0;
      selection.resetStates(min);
      for (var j = i; j < values.length; j++) {
        if (values[j] < values[min] || min == j) {
          min = j;
          playNote(values[min]);
          state[min] = 3;
          selection.resetStates(min);
        }
        else {
          selection.resetStates(min);
          state[j] = 1;
        }
        await sleep(animationSpeed);
      }
      selection.resetStates();
      await selection.swap(i, min);
    }
  selection.resetStates();
  enableButtons();
  }

  async swap(i, j){
    state[i] = 2;
    state[j] = 2;
    var temp = values[j];
    values[j] = values[i];
    values[i] = temp;
    await sleep(animationSpeed);
  }

  async resetStates(min = -1){
    for (var j = values.length; j >= 0; j--) {
      if (j != min) {
        state[j] = 0;
      }
    }
  }
}
