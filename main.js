const linkSocialMedia = {
  github: 'TdB27',
  youtube: 'channel/UCTYAROH_zl5JF9UNEtHtFrg',
  facebook: 'thiago.billy.100',
  instagram: 'thiagobilly27',
  linkedin: 'in/thiago-billy-367940213/'
}

function changeSocialMedia() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linkSocialMedia[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      console.log()
    })
}

getGithubProfileInfos()
