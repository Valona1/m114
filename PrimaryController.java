package ch.bbw.basisgui;

import java.io.IOException;
import javafx.fxml.FXML;

import javafx.scene.control.Label;
import javafx.scene.control.TextField;
/**
 * PrimaryController
 * @author <Ihr Name>
 * @version <Datum>
 */
public class PrimaryController {
	@FXML
	private Label lblOut;

	@FXML
	private TextField txtFldEingabe;

	@FXML
	private TextField txtFldVerschiebung;

	@FXML
	private void eigeneVerschluesseln() throws IOException {
		//ergänzen
		String text= txtFldEingabe.getText();
		lblOut.setText(text);   
	}
	
	@FXML
	private void eigeneEntschluesseln() throws IOException {
		//ergänzen
		String text= txtFldEingabe.getText();
		lblOut.setText(text);   
	}
}
