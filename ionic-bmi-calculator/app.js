const calcBn = document.querySelector('#calc');
const resetBn = document.querySelector('#reset')
const heightInput = document.querySelector('#height-input');
const weightInput = document.querySelector('#weight-input');

const resultArea = document.querySelector('#result')

const calculateBmi = () => {
    const height = heightInput.value;
    const weight = weightInput.value;

    const bmi = weight / (height * height)

    console.log(bmi);

    if (isNaN(bmi)){
        alert('Not a number, please check inputs!');
        return;
    }

    const resultElement = document.createElement('ion-card');
    resultElement.innerHTML = `
    <ion-card-content>
    <h2>${bmi}</h2>
    </ion-carc/content>
    `;
    resultArea.innerHTML = ''
    resultArea.appendChild(resultElement);
}

const resetInput = () => {
    heightInput.value = "";
    weightInput.value = "";
}

calcBn.addEventListener('click', calculateBmi)
resetBn.addEventListener('click', resetInput)

