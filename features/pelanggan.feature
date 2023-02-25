Feature: add pelanggan

  Scenario: Success open add pelanggan menu
    Given the user success login to kasiraja website
    When the user open pelanggan menu
    And the user click tambah button


  # negative test
  Scenario: Failed add pelanggan with empty name
    And the user add pelanggan with this following data:
      | name | phoneNumber | address | note |
      |      | 08123456789 |         |      |
    And the user click simpan button
    Then the user should see an alert with text "is not allowed to be empty"

  # positive test
  Scenario: Success add pelanggan
    And the user add pelanggan with this following data:
      | name  | phoneNumber | address | note  |
      | Gusti | 08123456789 | Jakarta | Pedas |
    And the user click simpan button
    Then the user should see an alert with text "item ditambahkan"