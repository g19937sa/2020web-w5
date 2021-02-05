const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日の空は:insertx: 。お散歩日和だと言って:inserty:は外に出た。 特に用はなかったので途中で出会った花子と:insertz:。その帰り道約1ozほどの綺麗な意思を見つけた。';
let insertX = ['快晴','曇り','雨'];
let insertY = ['スヌーピー','リラックマ','セントくん'];
let insertZ = ['バレンタイン用のチョコを買った','本屋さんで立ち読みをした','近くの河原で走り回った'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('花子',name);
  }

  if(document.getElementById("jp").checked) {
    newStory = newStory.replace('1oz','30g');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
