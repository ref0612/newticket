document.addEventListener('DOMContentLoaded', function() {
    
    // Función para validar que los datos clave del boleto no estén vacíos.
    function validateTicketData() {
        const requiredFields = [
            '.passenger-name',
            '.price-amount',
            '.info-value-large' // Usado para fecha, hora y asiento
        ];
        
        for (let field of requiredFields) {
            const elements = document.querySelectorAll(field);
            if (elements.length === 0) {
                 console.warn('Selector de campo requerido no encontrado:', field);
                 return false;
            }
            for (let element of elements) {
                if (!element || !element.textContent.trim()) {
                    console.warn('Campo requerido está vacío:', field);
                    alert('Faltan datos importantes en el boleto. No se puede imprimir.');
                    return false;
                }
            }
        }
        return true;
    }

    // Función principal para imprimir el boleto
    function printTicket() {
        // Validar datos antes de intentar imprimir
        if (validateTicketData()) {
            window.print();
        }
    }
    
    // Asignar el evento de clic al botón de imprimir
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', printTicket);
    }
    
    // Permitir imprimir usando el atajo de teclado Ctrl+P
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'p') {
            event.preventDefault(); // Prevenir el diálogo de impresión por defecto del navegador
            printTicket();
        }
    });

});