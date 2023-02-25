Feature: Login into kasiraja website

  # negative test
  Scenario: Failed login into kasiraja

    Given the user open kasiraja website
    When the user login with email: "gustiramadhan57@gmail.com" and password: "12345"
    Then the user should see an alert with text "Kredensial yang Anda berikan salah"

  # positive test
  Scenario: Success login into kasiraja

    Given the user open kasiraja website
    When the user login with email: "gustiramadhan57@gmail.com" and password: "123456789"
    Then the user should see a heading with text "kasirAja"