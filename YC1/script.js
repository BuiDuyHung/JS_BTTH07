// let userID = document.getElementById('txtUserID')
// let statusOfUserID = document.getElementById('statusOfUserID')

// userID.addEventListener('focus', function () {
//     this.style.border = '1px solid red'
// })

// userID.addEventListener('focusout', leaveUserId)

// function leaveUserId() {
//     // if (userID.value.length >= 5 && userID.value.length <= 12) {
//     //     statusOfUserID.textContent = 'UserID hợp lệ'
//     //     statusOfUserID.style.color = 'blue'
//     // } else {
//     //     statusOfUserID.textContent = 'UserID không hợp hợp lệ. Độ dài từ 5-12'
//     //     statusOfUserID.style.color = 'red'
//     // }

//     // cách 2:
//     var userIDRegex = /^[a-zA-Z0-9]{5,12}$/
//     if (userIDRegex.test(userID.value)) {
//         statusOfUserID.textContent = 'UserID hợp lệ'
//         statusOfUserID.style.color = 'blue'
//     } else {
//         statusOfUserID.textContent = 'UserID không hợp hợp lệ. Độ dài từ 5-12'
//         statusOfUserID.style.color = 'red'
//     }
// }

// Cách làm 2: chỉ xử lý khi nhập submit
function checkUserID() {
    let userID = document.getElementById('txtUserID')
    let userIDRegex = /^[a-zA-Z0-9]{5,12}$/
    if (userIDRegex.test(userID.value)) {
        return true
    }
    return false
}

function checkPassword() {
    let txtPassword = document.getElementById('txtPassword')
    let passwordRegex = /^[a-zA-Z0-9]{7,12}$/
    if (passwordRegex.test(txtPassword.value)) {
        return true
    }
    return false
}

function checkName() {
    let txtName = document.getElementById('txtName')
    let nameRegex = /^[a-zA-Z]+$/
    if (nameRegex.test(txtName.value)) {
        return true
    }
    return false
}

function checkAdress() {
    let txtAdress = document.getElementById('txtAdress')
    let adressRegex = /^[a-zA-Z0-9]+$/
    if (adressRegex.test(txtAdress.value)) {
        return true
    }
    return false
}

function checkZipCode() {
    let txtZipCode = document.getElementById('txtZipCode')
    let zipCodeRegex = /^\d{5}/
    if (zipCodeRegex.test(txtZipCode.value)) {
        return true
    }
    return false
}

function checkEmail() {
    let txtEmail = document.getElementById('txtEmail')
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
    if (emailRegex.test(txtEmail.value)) {
        return true
    }
    return false
}

function checkAbout() {
    let txtAbout = document.getElementById('txtAbout')
    let aboutRegex = /^[a-zA-Z]+$/
    if (aboutRegex.test(txtAbout.value)) {
        return true
    }
    return false
}

function checkSex() {
    let txtMale = document.getElementById('txtMale')
    let txtFemale = document.getElementById('txtFemale')

    if (txtMale.checked) {
        return true
    }
    return false
}

function checkLanguage() {
    let txtEnglish = document.getElementById('txtEnglish')
    let txtNonEnglish = document.getElementById('txtNonEnglish')

    if (txtEnglish.checked || txtNonEnglish.checked) {
        return true
    }
    return false
}

function checkCountry() {
    let txtCountry = document.getElementById('txtCountry')

    let seletxtCountry = txtCountry.options[txtCountry.selectedIndex].value
    if (seletxtCountry == 'Nhatban' || seletxtCountry == 'Vietnam' || seletxtCountry == 'Trungquoc') {
        return true
    }
    return false
}




let register = document.getElementById('btnRegister')
register.addEventListener('click', function (e) {
    e.preventDefault()

    // UserID
    let statusOfUserID = document.getElementById('statusOfUserID')
    if (checkUserID() == true) {
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    } else {
        statusOfUserID.textContent = 'UserID không hợp hợp lệ. Độ dài từ 5-12'
        statusOfUserID.style.color = 'red'
    }

    // Password
    let statusOfPassword = document.getElementById('statusOfPassword')
    if (checkPassword() == true) {
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    } else {
        statusOfPassword.textContent = 'Passwword không hợp hợp lệ. Độ dài từ 7-12'
        statusOfPassword.style.color = 'red'
    }

    // Name
    let statusOfName = document.getElementById('statusOfName')
    if (checkName() == true) {
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    } else {
        statusOfName.textContent = 'Name không hợp hợp lệ. Vui lòng nhập lại'
        statusOfName.style.color = 'red'
    }

    // Adress
    let statusOfAdress = document.getElementById('statusOfAdress')
    if (checkAdress() == true) {
        statusOfAdress.textContent = 'Địa chỉ hợp lệ'
        statusOfAdress.style.color = 'blue'
    } else {
        statusOfAdress.textContent = 'Xin mời nhập địa chỉ'
        statusOfAdress.style.color = 'red'
    }

    // Country
    let statusOfCountry = document.getElementById('statusOfCountry')
    if (checkCountry() == true) {
        statusOfCountry.textContent = 'Đã chọn quốc gia'
        statusOfCountry.style.color = 'blue'
    } else {
        statusOfCountry.textContent = 'Xin mời chọn quốc gia'
        statusOfCountry.style.color = 'red'
    }


    // ZIP code
    let statusOfZipCode = document.getElementById('statusOfZipCode')
    if (checkZipCode() == true) {
        statusOfZipCode.textContent = 'Zip code hợp lệ'
        statusOfZipCode.style.color = 'blue'
    } else {
        statusOfZipCode.textContent = 'Zip code không hợp hợp lệ. Xin mời nhập lại'
        statusOfZipCode.style.color = 'red'
    }

    // Email
    let statusOfEmail = document.getElementById('statusOfEmail')
    if (checkEmail() == true) {
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
    } else {
        statusOfEmail.textContent = 'Email không hợp hợp lệ. Xin mời nhập lại'
        statusOfEmail.style.color = 'red'
    }

    // Sex
    let statusOfSex = document.getElementById('statusOfSex')
    if (checkSex() == true) {
        statusOfSex.textContent = 'Giới tính hợp lệ'
        statusOfSex.style.color = 'blue'
    } else {
        statusOfSex.textContent = 'Giới tinh chưa được chọn'
        statusOfSex.style.color = 'red'
    }

    // Language
    let statusOfLanguage = document.getElementById('statusOfLanguage')
    if (checkLanguage() == true) {
        statusOfLanguage.textContent = 'Đã chọn'
        statusOfLanguage.style.color = 'blue'
    } else {
        statusOfLanguage.textContent = 'Ngoại ngữ chưa được chọn. Xin mời chọn lại'
        statusOfLanguage.style.color = 'red'
    }

    // About
    let statusOfAbout = document.getElementById('statusOfAbout')
    if (checkAbout() == true) {
        statusOfAbout.textContent = 'About hợp lệ'
        statusOfAbout.style.color = 'blue'
    } else {
        statusOfAbout.textContent = 'About không hợp hợp lệ. Xin mời điền thông tin phù hợp'
        statusOfAbout.style.color = 'red'
    }
})

