// Mir händ für de Code die Funktion CäsarVerschluesseln benutzt.
function caesarVerschluesseln(text) {
  var verschluesselterText = ""; // Variable gsetzt für die Speicherig vom verschlüsselte Text
  var schluessel = parseInt(
    document.getElementById("verschluesselnText").value
  );
  // Schleife gmacht um jedes einzelne Zeiche in en übergebene Text nacheinander z'verarbeite
  for (var i = 0; i < text.length; i++) {
    var zeichen = text.charCodeAt(i); // Wandelt das aktuelle Zeichen in den ASCII-Wert um
    // Überprüefe, zum luege ob die Zeiche en Grossbuechstabe isch
    if (zeichen >= 65 && zeichen <= 90) {
      // Verschiebig vom Zeiche um de Schlüsselwert und Modulo 26, innerhalb vom Buechstabebereich blibet
      verschluesselterText += String.fromCharCode(
        ((zeichen - 65 + schluessel) % 26) + 65
      );
    }
    // Überprüefe, zum luege ob die Zeiche en Chlibuechstabe isch
    else if (zeichen >= 97 && zeichen <= 122) {
      // verschiebig vom Zeiche zum de Schlüsselwert und de Modulo 26, das es innerhalb vom Buechstabebereich blibt
      verschluesselterText += String.fromCharCode(
        ((zeichen - 97 + schluessel) % 26) + 97
      );
    } else {
      // Sonderzeiche werdet nöd veränderet

      verschluesselterText += text.charAt(i);
    }
  }

  // Rückgab vom verschlüsselte Text

  return verschluesselterText;
}
