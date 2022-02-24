const selectOne = document.getElementById('selectOne');
const selectTwo = document.getElementById('selectTwo');
const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const btn = document.querySelector('.btn');
const rate = document.querySelector('.rate');

const calculate = () => {
   const selectOneVal = selectOne.value;
   const selectTwoVal = selectTwo.value;

   fetch(` https://api.exchangerate-api.com/v4/latest/${selectOneVal} `)
      .then(res => res.json())
      .then(data => {
         const rates = data.rates[selectTwoVal];

         
         inputTwo.value = (inputOne.value * rates).toFixed(2)
         
         rate.innerHTML = `${inputOne.value} ${selectOneVal} = ${inputTwo.value} ${selectTwoVal}`
         }
      )

}

selectOne.addEventListener('change', calculate);
selectTwo.addEventListener('change', calculate);
inputOne.addEventListener('input', calculate);
inputTwo.addEventListener('input', calculate);

btn.addEventListener('click', () => {
   const change = selectOne.value;
   selectOne.value = selectTwo.value;
   selectTwo.value = change;
   calculate();
})

calculate()