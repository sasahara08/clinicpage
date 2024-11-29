document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms['reservationForm'];
});

let id_val =[
    "reservation",
    "first-choice",
    "username",
    "phone"
];

check = () => {

    let isValid = true;

    id_val.forEach((id) => {
        let errerVal = document.getElementById(id).value;
        if (!errerVal) {
            isValid = false;
            document.getElementById(id).classList.add("red_form");
            document.getElementById(id).placeholder = "入力必須事項です";
        }
    });

    if (!isValid) {
        alert("必要事項に入力がありません");
        return false;
    }
    return true;
};



// check = () => {
//     if (document.getForm.first-choice.value == "") {
//         window.alert("IDが未入力です");
//         return false;
//     } else if (document.getForm.phone.value === "") {
//         window.alert("パスワードが未入力です");
//         return false;
//     } return true;

// }
