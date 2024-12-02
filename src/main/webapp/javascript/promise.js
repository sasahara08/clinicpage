document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms['reservationForm'];
});

let id_val = [
    "reservation",
    "first-choice",
    "username",
    "phone"
];

check = () => {
    let isValid = true;

    id_val.forEach((id) => {
        let errerVal = document.getElementById(id);

        if (id === "reservation") {
            const radios = document.querySelectorAll('input[name="reservation"]');
            let isSelected = Array.from(radios).some(radio => radio.checked);
            if (!isSelected) {
                isValid = false;
                radios.forEach(radio => {
                    const parent = radio.closest("td") || radio.parentElement;
                    parent.classList.add("td_radio");
                });
            } else if (isSelected) {
                radios.forEach(radio => {
                    const parent = radio.closest("td") || radio.parentElement;
                    parent.classList.remove("td_radio");
                });
            }
        } else {
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
        }
    })


    if (!isValid) {
        alert("必要事項に入力がありません");
        return false;
    }
    return true;
}

