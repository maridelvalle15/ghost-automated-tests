Feature: Delete post

  @user1 @web
  Scenario: As a user I can delete a published post
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    And I click on element having className "login"
    And I click on element that links to "#/posts/"
    And I click on element having className "gh-content-status-published"
    And I click on element having className "post-settings"
    And I click on element having className "settings-menu-delete-button"
    And I click on element having className "gh-btn-red"
    Then I should see text "Posts"

  @user2 @web
  Scenario: As a user I can delete a draft post
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    When I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    And I enter "12345678" into input field having className "password"
    And I click on element having className "login"
    And I click on element that links to "#/posts/"
    And I click on element having className "gh-content-status-draft"
    And I click on element having className "post-settings"
    And I click on element having className "settings-menu-delete-button"
    And I click on element having className "gh-btn-red"
    Then I should see text "Posts"