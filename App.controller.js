sap.ui.define(
  ["sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
	 "sap/m/PDFViewer"],
  function (Controller, JSONModel, PDFViewer) {
    "use strict";
    return Controller.extend("GOTO.App", {

      //Models
		_myCVpdfViewer: null,

    //constants
    _CVdocumentLocation: "./pageContent/toerehan_goeren_CV.pdf",
    _myLinkedinLink: "https://www.linkedin.com/in/toerehan-goeren/",
    _myXingLink: "https://www.xing.com/profile/Toerehan_Goeren",
    _myTwitterLink: "https://twitter.com/torehangoren",
    _myInstagramLink: "https://www.instagram.com/torehangoren/",
      
      onInit: function () {
        this._myCVpdfViewer = new PDFViewer();
        this.getView().addDependent(this._myCVpdfViewer);
      },

      onPressLinkedinIcon: function () {
        window.open(this._myLinkedinLink, '_blank');
      },
      onPressXingIcon: function() {
        window.open(this._myXingLink, '_blank');
      },
      onPressTwitterIcon: function() {
        window.open(this._myTwitterLink, '_blank');
      },
      onPressInstagramIcon: function() {
        window.open(this._myInstagramLink, '_blank');
      },
      onPressDownloadCV: function() {
        this._myCVpdfViewer.setSource(this._CVdocumentLocation);
			this._myCVpdfViewer.setTitle("My CV as Pdf");
			this._myCVpdfViewer.open();
      }
    
    });
  }
);
