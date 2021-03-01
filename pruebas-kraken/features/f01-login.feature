Feature: Login

  @user1 @web
  Scenario: As a user I can log in successfully with my email and password
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    And I click on element having className "login"
    Then I should see text "View site"

  @user2 @web
  Scenario: As a user I can't log with wrong email
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "mariseladelvalle@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    Then I should see the text "There is no user with that email address."
