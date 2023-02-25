import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page.js";
import checkPage from "../pageobjects/check.page.js";
import PelangganPage from "../pageobjects/pelanggan.page.js";

const pages = {
  login: LoginPage,
  pelanggan: PelangganPage,
};

// =============================================================================
// Common
// =============================================================================
// login
Given("the user success login to kasiraja website", async () => {
  await pages.login.open("/");
  await LoginPage.login("gustiramadhan57@gmail.com", "123456789");
});

// click tambah button
When("the user click tambah button", async () => {
  await expect(PelangganPage.btnTambah).toBeExisting();
  await pages.pelanggan.tambahPelanggan();
});

// click simpan button
When("the user click simpan button", async () => {
  await expect(PelangganPage.btnSimpan).toBeExisting();
  await pages.pelanggan.simpanPelanggan();
});

// =============================================================================
// Login
// =============================================================================

// open website
Given("the user open kasiraja website", async () => {
  await pages.login.open("/");
});

// login
When(
  "the user login with email: {string} and password: {string}",
  async (email, password) => {
    await LoginPage.login(email, password);
  }
);

// assert header
Then("the user should see a heading with text {string}", async (text) => {
  await expect(checkPage.heading).toBeExisting();
  await expect(checkPage.heading).toHaveTextContaining(text);
});

// assert an alert
Then("the user should see an alert with text {string}", async (text) => {
  await expect(checkPage.alert).toBeExisting();
  await expect(checkPage.alert).toHaveTextContaining(`${text}`);
});

// =============================================================================
// Pelanggan
// =============================================================================
// open pelanggan menu
When("the user open pelanggan menu", async () => {
  await pages.pelanggan.openPelangganMenu();
  await expect(PelangganPage.btnTambah).toBeExisting();
});

// add pelanggan data
When("the user add pelanggan with this following data:", async (DataTable) => {
  await expect(PelangganPage.btnSimpan).toBeExisting();
  const rows = DataTable.hashes();
  rows.forEach(async (row) => {
    await pages.pelanggan.setPelangganData(
      row.name,
      row.phoneNumber,
      row.address,
      row.note
    );
  });
});
