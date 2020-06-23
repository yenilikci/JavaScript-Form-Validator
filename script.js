const form = document.getElementById('form'); //form elementi
const username = document.getElementById('username'); //username input elementi
const email = document.getElementById('email'); //email input elementi
const password = document.getElementById('password'); //password input elementi
const repassword = document.getElementById('repassword'); //repassword input elementi

//input hata
function error(input,message){
    input.className = 'form-control is-invalid'; //error fonksiyonu çalışır ve form-control sınıfı ile birlikte is-invalid css sınıfı kullanılır
    const div = input.nextElementSibling; //mesajın yazdırılacağı element (inputtan hemen sonraki element, div)
    div.innerText = message; //div içine mesaj yazdırıldı
    div.className = 'invalid-feedback'; //mesajın yazdırılacağı div'e invalid-feedback class'ı eklendi
}

//input doğru
function success(input){
    input.className = 'form-control is-valid' //success fonksiyonu çalışır ve form-control sınıfı ile birlikte is-valid css sınıfı kullanılır
}

//mail doğrulama
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); //regex ifadesini çevirme
}

//veri uzunluk kontrolü
function checkLength(input,min,max){
    if(input.value.length < min){ //minumum karakter kontrolü
        error(input,`${input.id} en az ${min} karakter olmalıdır`);
    }else if(input.value.length > max){ //maksimum karakter kontrolü
        error(input,`${input.id} en fazla ${max} karakter olmalıdır`);
    }else{ //karakter uzunluğu koşullarına uyuyor ise
        success(input);
    }
}

//parola eşleşme kontrolü
function checkPasswords(pass1,pass2){
    if(pass1.value !== pass2.value){
        error(pass2,'Şifreler eşleşmiyor!');
    }else{
        success(pass2);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){  //username inputu boş bırakılırsa
        error(username,'Kullanıcı adı alanı boş bırakılamaz!'); 
    }else{ 
        checkLength(username,6,12);   
    }if(email.value === ''){ //email inputu boş bırakılırsa
        error(email,'Email alanı boş bırakılamaz!');
    }else if(!validateEmail(email.value)){ //mail format kontrolü
        error(email,'Uygun formatta mail adresi giriniz!');
    }else{
        success(email);
    }if(password.value === ''){ //password inputu boş bırakılırsa
       error(password,'Şifre alanı boş bırakılamaz!');
    }else{
        checkLength(password,6,30);
    }if(repassword.value === ''){ //repassword inputu boş bırakılırsa
        error(repassword,'Şifre tekrar alanı boş bırakılamaz!');
    }else{
        checkPasswords(password,repassword);
    }
});