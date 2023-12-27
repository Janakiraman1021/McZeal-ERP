

function verify(){
  let email = document.getElementById("email1").value;
  let pass = document.getElementById("password1").value;
  if (email=="janakiramankeerthivelan1021@gmail.com"){
      if (pass == 110822205025){
      window.location("profile.html")
      }
  }
  else{
      window.alert("Login Failured !")
      window.alert(email);
      window.alert(pass);
  }
}

const st1 = {register_number:110822205025,
  email:"janakiramankeerthivelan1021@gmail.com",
  name:"JanakiRaman",
  password:"110822205025",
  mobile_num:7604913189,
  Department:"INFORMATION TECHNOLOGY",
  dob:"21-10-2004"  ,
  attendence:99%,
  fees_pending:20000,
  current_yr:2,
  current_Sem:"III"
}

document.write(st1)