Feature: Logout

  @user1 @web
  Scenario: As a user I can log out sucessfully from the system
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element having id "ember47"
    Then I click on element having className "user-menu-signout"
    Then I should see text "Sign in"

  @user2 @web
  Scenario: As a user if I logout I can't access to the admin site
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element having id "ember47"
    Then I click on element having className "user-menu-signout"
    Then I navigate to page "http://localhost:2372/ghost/#/site"
    Then I should see text "Sign in"