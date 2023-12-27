
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
};
function view() {
window.alert("Your Details aree")
document.getElementById("view").innerHTML='REGISTER NUMBER' + st1.register_number;
}
