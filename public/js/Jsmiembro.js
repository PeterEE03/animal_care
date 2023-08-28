
function formatPhoneNumber(input) {
    var value = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean dígitos
    if (value.length > 4) {
        value = value.substring(0, 4) + '-' + value.substring(4);
    }
    input.value = value;
}

$(document).ready(function () {
    $("#add-telefono").click(function () {
        var newTelefonoField = `
        <div class="row" id="telefono-container">
        <div class="col-xl-8">
            <div class="inputContainer" >
                <input class="inputField form-control telefono" type="tel"
                    maxlength="9" placeholder="9999-9999" name="telefonos[]"
                    oninput="formatPhoneNumber(this)"
                    onkeydown="return restrictToNumbers(event)">
            </div>
        </div>
        <div class="col-xl-3">
            <button type="button" class="btn btn-danger remove-telefono">
                <i class="svg-icon fas fa-circle-xmark"></i>
            </button>
        </div>
    </div>
                `;
        $("#telefono-container").append(newTelefonoField);
    });

    // Remover campos agregados dinámicamente
    $("#telefono-container").on("click", ".remove-telefono", function () {
        $(this).closest(".row").remove();
    });
});