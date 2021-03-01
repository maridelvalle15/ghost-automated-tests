Feature: Change blog design

  @user1 @web
  Scenario: As a user I can create new navigation options
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element that links to "#/settings/design/"
    Then I enter "New navigation" into input field having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-label" "gh-input"
    Then I enter "newUrl" into input field having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-url" "gh-input"
    Then I click on element having classNames "gh-canvas-header" "gh-btn-blue"
    Then I should see text "Saved"

  @user2 @web
  Scenario: As a user I can delete navigation options
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element that links to "#/settings/design/"
    Then I click on element having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-delete"
    Then I click on element having classNames "gh-canvas-header" "gh-btn-blue"
    Then I should see text "Saved"