const VerifyLogin = () => {
    let input = document.querySelectorAll('.SignInInput')
    let UserName = input[0].value
    let Password = input[1].value
    let alertContainer = document.querySelectorAll('.NotificationContainer')[0]
    if(UserName == 'DeltaProtection' && Password == 'D3ltaPr0tect2025')
    {
        alertContainer.innerHTML = ""
        window.location = 'Home.html'
    }
    else
    {
        console.log(UserName.value)
        console.log(Password)
        console.log('Inside the else')
        alertContainer.innerHTML = "Incorrect UserName Or Password"
    }
    }



const Netflix = () => {
    location.href = 'https://www.netflix.com/'
}

const Chase = () => {
    location.href = 'https://www.chase.com/'
}

const Hulu = () => {
    location.href = 'https://www.hulu.com/welcome'
}

const Youtube = () => {
    location.href = 'https://www.youtube.com/'
}

const Fanduel = () => {
    location.href = 'https://www.fanduel.com/'
}