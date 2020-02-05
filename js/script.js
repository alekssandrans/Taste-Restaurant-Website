const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
const showFoodImage = () => {
    document.getElementById('home-image1').style.display = "block";
    document.getElementById('home-image2').style.display = "none";
    document.getElementById('home-image3').style.display = "none";

    document.getElementById('food').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');

    document.getElementById('home-image1').style.animation = "imageFade 1s ease-in-out";
}
const showWineImage = () => {
    document.getElementById('home-image1').style.display = "none";
    document.getElementById('home-image2').style.display = "block";
    document.getElementById('home-image3').style.display = "none";

    document.getElementById('wine').classList.add('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');
    document.getElementById('view').classList.remove('active-link-text');

    document.getElementById('home-image2').style.animation = "imageFade 1s ease-in-out";
}
const showViewImage = () => {
    document.getElementById('home-image1').style.display = "none";
    document.getElementById('home-image2').style.display = "none";
    document.getElementById('home-image3').style.display = "block";

    document.getElementById('view').classList.add('active-link-text');
    document.getElementById('wine').classList.remove('active-link-text');
    document.getElementById('food').classList.remove('active-link-text');

    document.getElementById('home-image3').style.animation = "imageFade 1s ease-in-out";
}
const showMainMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display = "block";
    document.getElementsByClassName('drinks-menu')[0].style.display = "none";
    document.getElementsByClassName('desserts-menu')[0].style.display = "none";

    document.getElementsByClassName('main')[0].classList.add("active-menu");
    document.getElementsByClassName('desserts')[0].classList.remove("active-menu");
    document.getElementsByClassName('drinks')[0].classList.remove("active-menu");
}
const showDessertsMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display = "none";
    document.getElementsByClassName('desserts-menu')[0].style.display = "block";
    document.getElementsByClassName('drinks-menu')[0].style.display = "none";

    document.getElementsByClassName('main')[0].classList.remove("active-menu");
    document.getElementsByClassName('desserts')[0].classList.add("active-menu");
    document.getElementsByClassName('drinks')[0].classList.remove("active-menu");
}
const showDrinksMenu = () => {
    document.getElementsByClassName('main-menu')[0].style.display = "none";
    document.getElementsByClassName('desserts-menu')[0].style.display = "none";
    document.getElementsByClassName('drinks-menu')[0].style.display = "block";

    document.getElementsByClassName('main')[0].classList.remove("active-menu");
    document.getElementsByClassName('desserts')[0].classList.remove("active-menu");
    document.getElementsByClassName('drinks')[0].classList.add("active-menu");
}

navSlide();

// Form Validation

const getValue = (id) => {
    return document.getElementById(id).value;
}
const isNullOrWhitespace = (input) => {
    return !input || !input.trim();
}
const alertUser = (errorMessage) => {
    const newErrorMessage = document.createElement("div");
    const errorMessageText = document.createTextNode(errorMessage);
    newErrorMessage.appendChild(errorMessageText);
    newErrorMessage.classList.add("error")
    const messages = document.getElementById("messages");
    messages.appendChild(newErrorMessage);

    setTimeout(() => {
        messages.removeChild(newErrorMessage);
    }, 3000);
}
const isValidEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}
const isValidPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length < 10) {
        return false;
    }
    for (let i = 0; i < phoneNumber.length; i++) {
        if (isNaN(phoneNumber[i])) {
            return false;
        }
    }
    if (phoneNumber[0] === '0' && phoneNumber.length === 10) {
        return true;
    }
    if (phoneNumber[0] === '+' && phoneNumber[1] === '3' && phoneNumber[2] === '5' && phone[3] === '9' && phoneNumber.length === 13) {
        return true;
    }
    return false;
}
const isValidNumberOfGuests = (numberOfGuests) => {
    return !isNaN(numberOfGuests) && numberOfGuests >= 1;
}
const isLeap = (year) => {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
const isFutureDateAndTime = (day, month, year, hours, minutes) => {
    const currentDate = new Date();
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    const date = new Date();
    date.setDate(day);
    date.setMonth(month - 1);
    date.setFullYear(year);
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date > currentDate;
}
const isValidDateAndTime = (date, time) => {
    //Date Validation
    const splitDate = date.split('.');
    if (splitDate.length != 3) {
        return false;
    }
    let day = splitDate[0];
    if (day.length < 1 || day.length > 2) {
        return false;
    }
    if (day.length == 2 && day[0] === '0') {
        day = day.substring(1);
    }
    let month = splitDate[1];
    if (month.length < 1 || month.length > 2) {
        return false;
    }
    if (month.length == 2 && month[0] === '0') {
        month = month.substring(1);
    }
    const year = splitDate[2];
    if (year.length != 4) {
        return false;
    }
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: if (day > 31) { return false; } break;
        case 4:
        case 6:
        case 9:
        case 11: if (day > 20) { return false; } break;
        case 2: if (isLeap(year) && day > 29) { return false; } else if (day > 28) { return false; } break;
    }
    //Time Validation
    const splitTime = time.split(':');
    if (splitTime.length != 2) {
        return false;
    }
    const hours = splitTime[0];
    const minutes = splitTime[1];
    if (isNaN(hours) || hours.length != 2 || isNaN(minutes) || minutes.length != 2) {
        return false;
    }

    if (!isFutureDateAndTime(day, month, year, hours, minutes)) {
        return false;
    }
    return true;
}
const isValidReservationForm = (name, email, phone, numberOfGuests, date, time) => {

    let valid = true;
    if (isNullOrWhitespace(name) || isNullOrWhitespace(email) || isNullOrWhitespace(phone) || isNullOrWhitespace(numberOfGuests) || isNullOrWhitespace(date) || isNullOrWhitespace(time)) {
        alertUser("All fields are required.");
        valid = false;
    }
    else {
        if (!isValidEmail(email)) {
            alertUser("Please enter a valid email.");
            valid = false;
        }
        if (!isValidPhoneNumber(phone)) {
            alertUser("Plese enter a valid phone number.");
            valid = false;
        }
        if (!isValidNumberOfGuests(numberOfGuests)) {
            alertUser("The number of guests should be equal or greather than 1.");
            valid = false;
        }
        if (!isValidDateAndTime(date, time)) {
            alertUser("Please enter a valid date and time in correct format.");
            valid = false;
        }
    }
    return valid;
}
// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyARLe6grNgcs5SOINnv_DN7i5DAP2k3CJw",
    authDomain: "reservation-form-e8c9f.firebaseapp.com",
    databaseURL: "https://reservation-form-e8c9f.firebaseio.com",
    projectId: "reservation-form-e8c9f",
    storageBucket: "reservation-form-e8c9f.appspot.com",
    messagingSenderId: "167650405387",
    appId: "1:167650405387:web:529334851a954b39e12b0e",
    measurementId: "G-9C5WESKJWG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference reservations collection
const reservationsRef = firebase.database().ref("reservations");

const submitForm = (e) => {
    e.preventDefault();

    const name = getValue('name');
    const email = getValue('email');
    const phone = getValue('phone');
    const numberOfGuests = getValue('numberOfGuests');
    const date = getValue('date');
    const time = getValue('time');

    if (isValidReservationForm(name, email, phone, numberOfGuests, date, time)) {
        // Save data to firebase.
        let newReservationsRef = reservationsRef.push();
        newReservationsRef.set({
            name: name,
            email: email,
            phone: phone,
            numberOfGuests: numberOfGuests,
            date: date,
            time: time
        });

        //Show success message.
        document.getElementsByClassName('reservation-time')[0].innerHTML = time;
        document.getElementsByClassName('reservation-date')[0].innerHTML = date;
        document.getElementsByClassName('success')[0].style.display = "block";

        setTimeout(() => {
            document.getElementsByClassName('success')[0].style.display = "none";
        }, 5000);

        document.getElementsByClassName('reservation-form')[0].reset();
    }

}

document.getElementsByClassName("reservation-form")[0].addEventListener("submit", submitForm);

