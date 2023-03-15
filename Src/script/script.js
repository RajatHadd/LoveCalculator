
  function tfName1() {
    const firstName = document.getElementById("nameOne");
    const resultName1 = document.getElementById('resultName1');
    localStorage.setItem('name1', firstName.value);
    if (firstName.value == '') {
      resultName1.innerHTML = "First name is empty!"
    }
    else{
      resultName1.innerHTML = ''
    }

  }
  function tfName2() {
    const secondName = document.getElementById('nameTwo');
    const resultName2 = document.getElementById('resultName2');
    localStorage.setItem('name2', secondName.value)

    if (secondName.value == "") {
      resultName2.innerHTML = "Second name is empty"
    }
    else{
      resultName2.innerHTML = ''
    }
  }
  //this function controls the active link for the navigation
  function activeLinkClass1() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    if (allocatedClasses[0].className == 'nav-item') {
      allocatedClasses[0].classList.add('colorLink');
      allocatedClasses[1].classList.remove('colorLink')
      allocatedClasses[2].classList.remove('colorLink')
    }
  }
  function activeLinkClass2() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    if (allocatedClasses[1].className == 'nav-item') {
      allocatedClasses[0].classList.remove('colorLink');
      allocatedClasses[1].classList.add('colorLink')
      allocatedClasses[2].classList.remove('colorLink')
    }
  }
  function activeLinkClass3() {
    const allocatedClasses = document.getElementsByClassName('nav-item');
    if (allocatedClasses[2].className == 'nav-item') {
      allocatedClasses[0].classList.remove('colorLink');
      allocatedClasses[1].classList.remove('colorLink')
      allocatedClasses[2].classList.add('colorLink')
    }
  }
  //Form validation

  function formValidator() {
    tfName1();
    tfName2();

  }
  //@desc putting restriction on the text fields
  function restrictionTf(event) {
    var y = event.which || event.keyCode;
    if ((y > 96 && y < 123) || (y >64 && y < 91)) {
      return true
    }
    else {
      return false;
    }
  }


  //function that creates the numArray by comparing the names
  function comparingNames(name1, name2) {
    loveVar = "loves"
    const numArray = []
    const discardedCharacters = []

    const combinedName = name1 + loveVar + name2;

    for (i = 0; i < combinedName.length; i++) {
      let counter = 1;
      let counter2 = 0

      testCharacters = false
      for (k = 0; k < discardedCharacters.length; k++) {
        if (combinedName[i] == discardedCharacters[k]) {
          testCharacters = true;
        }
      }

      if (i == combinedName.length - 1 && !testCharacters) {
        numArray.push(1);
      }

      else if (!testCharacters) {
        for (j = i + 1; j < combinedName.length; j++) {
          if (combinedName[i] == combinedName[j]) {
            counter += 1;
          }
          else {
            counter2 = 1
          }
        }

        if (counter > 1) {
          numArray.push(counter)
        }
        else if (counter2 == 1) {
          numArray.push(counter2)
        }
      }
      discardedCharacters.push(combinedName[i]);

    }
    for (i = discardedCharacters.length; i > 0; i--) {
      discardedCharacters.pop();
    }
    return numArray;
  }

  //@desc function that caluclates the love percentage using the numArray(while comparing) 
  function calculatePercentage(numArray) {
    let resultPercentage = ''

    stepsArray = []
    stepsArray.push(numArray);
    let k = 0;
    while (stepsArray[k].length > 2) {
      let tempArray = []
      for (i = 0; i < stepsArray[k].length; i++) {
        if (stepsArray[k].length > 2) {
          if (stepsArray[k].length - 1 - i > i) {
            let sum = stepsArray[k][i] + stepsArray[k][stepsArray[k].length - i - 1];
            if (sum > 9) {
              overFlowCheck = sum.toString();
              newSum = parseInt(overFlowCheck[overFlowCheck.length - 1]);
              tempArray.push(newSum)
            } else {
              tempArray.push(sum);
            }
          }
          else if (stepsArray[k].length - i - 1 == i) {
            let noSum = stepsArray[k][i];
            tempArray.push(noSum);
          }
        }
      }
      stepsArray.push(tempArray);
      k++;
    }

    for (i = 0; i < stepsArray[stepsArray.length - 1].length; i++) {
      resultPercentage += stepsArray[stepsArray.length - 1][i];
    }
    var percentageOfLove = parseInt(resultPercentage);
    return percentageOfLove;
    // showPercentage(percentageOfLove);
  }

  //fuction that shows the result percentage
  function showPercentage(percentageOfLove){
    const childContainer = document.getElementById('child-container') ;
    const resultText = document.getElementById('result-percentage');
    const loveMessage = document.getElementById('love-message');
    loveMessage.style.color = "red"
    childContainer.style.color = 'red';
    childContainer.style.width = `${percentageOfLove}%`;

    resultText.innerHTML = `${percentageOfLove}%`;
    resultText.style.color = 'red'

    if(percentageOfLove <51){
      loveMessage.innerHTML = "Can certainly feel a connection. Things can work out if you guys get serious. Just keep the momentum going.";
    }else if(percentageOfLove > 50 && percentageOfLove <61){
      loveMessage.innerHTML = "On the way of Love. The path is tough. When you talk about love, you should both consider pain. Share your pain and love on this way of love."
    }
    else if(percentageOfLove > 60 && percentageOfLove <71){
      loveMessage.innerHTML = "Congratulations. Things are getting serious! It is this moment when you feel good when you are with this person. Go for it.";
    }
    else if(percentageOfLove > 70 && percentageOfLove <81)
    {loveMessage.innerHTML = "You are made for each other. At this moment, even the fall season is beautiful because you are with the Spring(your love) now!"}
    else if(percentageOfLove > 80){
      loveMessage.innerHTML = "How does it feel when you both listen to 'Perfect' by 'Ed Sheran'. The is the best feeling in the world. Embrace you love. Protect it. You don't need this calculator anymore."
    }
  }



  //@desc function that compares the names and calculates the percentatge
  function loveCalulation() {
    name1 = localStorage.getItem('name1').toLowerCase();
    name2 = localStorage.getItem('name2').toLowerCase();
    if (name1 != '' && name2 != '') {
      let numArray = comparingNames(name1, name2);
      let numArray2 = comparingNames(name2,name1);
      var value1 = calculatePercentage(numArray);
      var value2 = calculatePercentage(numArray2);

      var averagePercentage = Math.round((value1 + value2)/2);
      showPercentage(averagePercentage)
    }
  }

  //main function that run when the submit button is pressed
  function submitEvent() {
    formValidator();
    loveCalulation();
    
  }
