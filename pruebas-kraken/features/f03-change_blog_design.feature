Feature: Change blog design

  @user1 @web
  Scenario: As a user I can create new navigation options
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    And I click on element having className "login"
    And I click on element that links to "#/settings/design/"
    And I enter "New navigation" into input field having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-label" "gh-input"
    And I enter "newUrl" into input field having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-url" "gh-input"
    And I click on element having classNames "gh-canvas-header" "gh-btn-blue"
    Then I should see text "Saved"

  @user2 @web
  Scenario: As a user I can delete navigation options
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    And I click on element having className "login"
    And I click on element that links to "#/settings/design/"
    And I click on element having classNames "gh-blognav-container" "gh-blognav-item" "gh-blognav-delete"
    And I click on element having classNames "gh-canvas-header" "gh-btn-blue"
    Then I should see text "Saved"