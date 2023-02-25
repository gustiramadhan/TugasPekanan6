import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
 class PelangganPage extends Page {
    /**
     * define selectors using getter methods
     */
  
    get pelangganMenu() {
      return $("*=pelanggan");
    }
  
    get inputName() {
      return $("#nama");
    }
  
    get inputPhoneNumber() {
      return $('[id="no.hp"]');
    }
  
    get inputAddress() {
      return $("#alamat");
    }
  
    get inputNote() {
      return $("#keterangan");
    }
  
    get btnTambah() {
      return $("*=tambah");
    }
  
    get btnSimpan() {
      return $(".chakra-button");
    }
  
    async openPelangganMenu() {
      await this.pelangganMenu.click();
    }
  
    async tambahPelanggan() {
      await this.btnTambah.click();
    }
  
    async setPelangganData(name, phoneNumber, address, note) {
      await this.inputName.setValue(name);
      await this.inputPhoneNumber.setValue(phoneNumber);
      await this.inputAddress.setValue(address);
      await this.inputNote.setValue(note);
    }
  
    async simpanPelanggan() {
      await this.btnSimpan.click();
    }
  }
  
  export default new PelangganPage();
  