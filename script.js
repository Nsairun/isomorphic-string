const string1 = document.querySelector('#str1')
const string2 = document.querySelector('#str2')
const checkBtn = document.getElementById('btn')
const resultDisplay = document.getElementById('result')

const isIsomorphic = (str1, str2) => {
  if (str1.length !== str2.length || !str1 || !str2) {
    return (resultDisplay.innerHTML = 'input data in the boxes above')
  }

  for (let i = 0; i < str1.length; i++) {
    const a = str1.indexOf(str1[i])
    const b = str2.indexOf(str2[i])
    if (str2[a] !== str2[i] || str1[b] !== str1[i]) {
      return (resultDisplay.innerHTML = 'false')
    }
  }
  resultDisplay.innerHTML = 'true'
}

checkBtn.addEventListener('click', () => {
  isIsomorphic(string1.value, string2.value)
})
