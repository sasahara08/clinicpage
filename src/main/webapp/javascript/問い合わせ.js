document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms['reservationForm'];
});

let id_val = [
    "username",
    "phone",
    "email",
    "comments"
];

check = () => {
    let isValid = true;

    id_val.forEach((id) => {
        let errerVal = document.getElementById(id);
        const val = errerVal?.value || "";
        if (!val) {
            isValid = false;
            document.getElementById(id).classList.add("red_form");
            document.getElementById(id).placeholder = "入力必須事項です";
        }

        else if (val) {
            document.getElementById(id).classList.remove("red_form");
            document.getElementById(id).placeholder = "";
        }
    })



    if (!isValid) {
        alert("必要事項に入力がありません");
        return false;
    }
    return true;
}

