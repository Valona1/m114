// Mir händ für de Code die Funktion CäsarVerschluesseln benutzt.

function caesarVerschluesseln(text) {
    var verschluesselterText = ""; // Variable gsetzt für die Speicherig vom verschlüsselte Text
    
    var schluessel = parseInt(document.getElementById("verschluesselnText").value);

    // Schleife gmacht um jedes einzelne Zeiche in en übergebene Text nacheinander z'verarbeite
    for (var i = 0; i < text.length; i++) {
        var zeichen = text.charCodeAt(i); // Wandelt das aktuelle Zeichen in den ASCII-Wert um
        
        // Überprüefe, zum luege ob die Zeiche en Grossbuechstabe isch
        if (zeichen >= 65 && zeichen <= 90) {
            // Verschiebig vom Zeiche um de Schlüsselwert und Modulo 26, innerhalb vom Buechstabebereich blibet
            verschluesselterText += String.fromCharCode((zeichen - 65 + schluessel) % 26 + 65);
        } 
        // Überprüefe, zum luege ob die Zeiche en Chlibuechstabe isch
        else if (zeichen >= 97 && zeichen <= 122) {
            // chlibuechstabe
            // verschiebig vom Zeiche zum de Schlüsselwert und de Modulo 26, das es innerhalb vom Buechstabebereich blibt
            verschluesselterText += String.fromCharCode((zeichen - 97 + schluessel) % 26 + 97);
        } 
        else {
            // Sonderzeiche werdet nöd veränderet
            verschluesselterText += text.charAt(i);
        }
    }
    
    // Rückgab vom verschlüsselte Text
    return verschluesselterText;
}


// Funktion zu de Entschlüsselig vom verschlüsselte Text mithilf vo de Caesar-Verschlüsselig
function caesarEntschluesseln(verschluesselterText) {
    var klartext = ""; // Variable zu de Speicherig vom entschlüsselte Text
    var schluessel = parseInt(document.getElementById("verschluesselnText").value); // Liest de Entschlüsseligsschlüssel usem HTML-Element
    
    // Schleife zum Durchlaufe vo jedem Zeichen im verschlüsselte Text
    for (var i = 0; i < verschluesselterText.length; i++) {
        var zeichen = verschluesselterText.charCodeAt(i); // Wandlet das aktuelle Zeiche ih de entsprechendi ASCII-Wert um
        
        // Überprüefig, ob das Zeiche en Grossbuechstabe isch (ASCII-Werte vo A-Z)
        if (zeichen >= 65 && zeichen <= 90) {
            // Grossbuechstabe
            klartext += String.fromCharCode((zeichen - 65 - schluessel + 26) % 26 + 65); // Entschlüsselung und Hinzufügen zum Klartext
        } 
        // Überprüefig, ob das Zeiche en Chlibuechstabe isch (ASCII-Werte vo a-z)
        else if (zeichen >= 97 && zeichen <= 122) {
            // Chlibuechstabe
            klartext += String.fromCharCode((zeichen - 97 - schluessel + 26) % 26 + 97); // Entschlüsselig und Hinzufüege zum Klartext
        } 
        else {
            // Sonderzeichen blibet unveränderet
            klartext += verschluesselterText.charAt(i);
        }
    }
    
    // Rückgab vom entschlüsselte Text
    return klartext;
}

// Funktion zum Verschlüssle vom ihgebene Klartext
function verschluesseln() {
    var klartext = document.getElementById("inputText").value; // List de ihgebeni Klartext usem HTML-Element
    
    if (klartext.trim() === "") {
        document.getElementById("errorMessage").textContent = "Bitte geben Sie einen Klartext ein."; // Überprüefig, ob en Klartext ihgeh worde isch
        return;
    }
    
    document.getElementById("errorMessage").textContent = ""; // Fehlermeldig zrugsetze
    
    var verschluesselterText = caesarVerschluesseln(klartext); // Funktion zu de Caesar-Verschlüsselig ufrüefe
    document.getElementById("outputText").value = verschluesselterText; // Setzt de verschlüsselti Text im HTML-Element
}

// Funktion zum Entschlüssle vom ihgebene verschlüsselte Text
function entschluesseln() {
    var verschluesselterText = document.getElementById("outputText").value; // List de ihgebeni verschlüsselti Text usem HTML-Element
    
    if (verschluesselterText.trim() === "") {
        document.getElementById("errorMessage").textContent = "Bitte geben Sie einen verschlüsselten Text ein."; // Überprüefig, ob en verschlüsselte Text ihgeh worde isch
        return;
    }
    
    document.getElementById("errorMessage").textContent = ""; // Fehlermeldig zrugsetze
    
    var klartext = caesarEntschluesseln(verschluesselterText); // Funktion zu de Caesar-Verschlüsselig ufrüefe
    document.getElementById("outputText").value = klartext; // Setzt de entschlüsselti Text im HTML-Element
}

// Funktion zum Umschalte vom Dark Mode
function toggleDarkMode() {
    var formBox = document.querySelector('.form-box'); // Selektiert s'HTML-Element mit de Klass "form-box"
    var body = document.body; // Selektiert s'body-Element
    
    formBox.classList.toggle('dark-mode'); // Wechslet d'Klass "dark-mode" vom formBox-Element
    body.classList.toggle('dark-mode'); // Wechslet d'Klass "dark-mode" vom body-Element
    
    var modeToggleBtn = document.querySelector(".mode-toggle"); // Selektiert s'HTML-Element mit de Klass "mode-toggle"
    
    // Überprüefig, ob de body d'Klass "dark-mode" enthaltet, zum de Text vom Mode-Button ahzpasse
    if (body.classList.contains("dark-mode")) {
        modeToggleBtn.textContent = "Light";
    } else {
        modeToggleBtn.textContent = "Dark";
    }
}