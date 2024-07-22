function toggleMode() {
  const html = document.documentElement
  //Adicionando ou tirando a classe light ao html
  html.classList.toggle('light')

  //pegar tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar_light.png')
  }
  else {
    img.setAttribute('src', './assets/avatar.png')
  }
}