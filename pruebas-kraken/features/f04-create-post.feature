Feature: Create post

  @user1 @web
  Scenario: As a user I can create a new post with 9 characters without spaces
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element that links to "#/posts/"
    Then I click on element that links to "#/editor/post/"
    Then I enter "AabbccddF" into input field having className "gh-editor-title"
    Then I enter "Description" into input field having className "koenig-editor__editor"
    Then I click on element having className "gh-publishmenu"
    Then I click on element having className "gh-publishmenu-button"
    Then I should see text "Published"

  @user2 @web
  Scenario: As a user I can create a new post with 500 characters
    Given I navigate to page "http://localhost:2372/ghost/#/signin"
    Then I enter "marisela.delvalle93@gmail.com" into input field having className "email"
    Then I enter "12345678" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element that links to "#/posts/"
    Then I click on element that links to "#/editor/post/"
    Then I enter "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu" into input field having className "gh-editor-title"
    Then I enter "Description" into input field having className "koenig-editor__editor"
    Then I click on element having className "gh-publishmenu"
    Then I click on element having className "gh-publishmenu-button"
    Then I should see text "Published"