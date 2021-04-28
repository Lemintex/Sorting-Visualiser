//2715375
class bubbleSort {
  constructor() {
  }

  async sort(){
    algorithmName = "Bubble Sort";
    algorithmDesc = "This algorithm compares two variables, making the bigger above the lower. This repeats along the list until the biggest number is at the end of the array. This repeats for each value until they have 'bubbled' into order."
    algorithmVid = "https://youtube.com/embed/xli_FI7CuzA";
    values = shuffle(init);
    for (var i = 0; i < values.length; i++) {
      var j = 0;
      for (j = 0; j < values.length - i; j++) {
        if (values[j-1] > values[j]) {
          await bubble.swap(j-1, j);
        }
        else {
          state[j+1] = 1;
          state[j] = 1;
          await sleep(animationSpeed);
        }
        playNote(values[j]);
        await bubble.resetStates();
      }
    }
    await bubble.resetStates();
  enableButtons();
  }

async resetStates(){
  for (var k = 0; k < values.length; k++) {
    state[k] = 0;
    }
  }

  async swap(i, j){
    state[j+1] = 2;
    state[j] = 2;
    var temp = values[j];
    values[j] = values[i];
    values[i] = temp;
    await sleep(animationSpeed);
  }
}
