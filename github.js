const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
const total = document.getElementById('total');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        switch (radio.value) {
            case "1":
                total.textContent = "$10.00 USD";
                break;
            case "2":
                total.textContent = "$18.00 USD";
                break;
            case "3":
                total.textContent = "$24.00 USD";
                break;
        }
    });
});
