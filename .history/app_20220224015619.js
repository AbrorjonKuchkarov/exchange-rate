const selectOne = document.getElementById('selectOne');
const selectTwo = document.getElementById('selectTwo');
const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const btn = document.querySelector('.btn');
const rate = document.querySelector('.rate');

const calculate = () => {
   const selectOneVal = selectOne.value;
   console.log(selectOneVal);

}

selectOne.addEventListener('change', calculate);
selectTwo.addEventListener('change', calculate);
inputOne.addEventListener('input', calculate);
inputTwo.addEventListener('input', calculate);

calculate()