//2715375
class insertionSort {
  constructor() {

  }

  async sort(){
    algorithmName = "Insertion Sort";
    algorithmDesc = "This algorithm does the opposite of bubble sort, comparing the leftmost value in the unsorted partion. If a swap has to be made, the variable next to that is compared against it (and so on). If not, the algorithm compares the next leftmost of the unsorted partition. This repeats until the array is sorted."
    algorithmVid = "https://www.youtube.com/embed/JU767SDMDvA";
    values = shuffle(init);
    for (var i = 0; i <= values.length; i++) {
        await insertion.resetStates(0);
        for (var j = i; j >= 0 && values[j] > values[j+1]; j--) {
          await insertion.resetStates(0);
          await insertion.swap(j, j+1);
          playNote(values[j+1]);
        }

    }
    enableButtons();
  }

  async resetStates(i){
    for (var j = values.length - 1; j >= 0; j--) {
      state[j] = 0;
    }
  }
  async swap(i, j){
    state[i-1] = 2;
    state[j-1] = 2;
    var temp = values[j];
    values[j] = values[i];
    values[i] = temp;
    await sleep(animationSpeed);
  }
}
