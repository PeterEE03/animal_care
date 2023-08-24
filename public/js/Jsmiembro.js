
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
                <div class="row">
                <div class="col-xl-6">
                    <div class="inputContainer" id="telefono-container">
                        <input class="inputField" type="tel" class="form-control telefono"
                            maxlength="9" placeholder="9999-9999" name="telefonos[]"
                            oninput="formatPhoneNumber(this)"
                            onkeydown="return restrictToNumbers(event)">
                        <label class="inputFieldLabel" for="fecha">Telefono</label>
                        <i class="inputFieldIcon fas fa-phone"></i>
                    </div>
                </div>
                <div class="col-xl-6">
                    <button type="reset" class="button button-danger" id="add-telefono">
                        <i class="svg-icon fas fa-circle-xmark"></i>
                    </button>
                </div>
            </div>
                `;
        $("#telefono-container").append(newTelefonoField);
    });

    // Remover campos agregados dinámicamente
    $("#telefono-container").on("click", ".remove-telefono", function () {
        $(this).closest(".row.g-2").remove();
    });
});