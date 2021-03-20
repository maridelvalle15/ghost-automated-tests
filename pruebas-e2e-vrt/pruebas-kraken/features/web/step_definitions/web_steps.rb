if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

  Then(/^I enter "([^\"]*)" into input field having className "([^\"]*)"$/) do |text, className|
    @driver.find_element(:class, className).send_keys(text)
    sleep 2
  end

  Then(/^I click on element having className "(.*?)"$/) do |className|
    @driver.find_element(:class, className).click
    sleep 2
  end

  Then(/^I enter "([^\"]*)" into input field having classNames "([^\"]*)" "([^\"]*)" "([^\"]*)" "([^\"]*)"$/) do |text, className0, className1, className2, className3|
    container = @driver.find_elements(:class, className0)[0]
    element = container.find_elements(:class, className1)[-1]
    child = element.find_element(:class, className2)
    child.find_element(:class, className3).send_keys(text)
    sleep 2
  end

  Then(/^I click on element having classNames "([^\"]*)" "([^\"]*)" "([^\"]*)"$/) do |className0, className1, className2|
    container = @driver.find_elements(:class, className0)[0]
    element = container.find_elements(:class, className1)[0]
    element.find_element(:class, className2).click
    sleep 2
  end

  Then(/^I click on element having classNames "([^\"]*)" "([^\"]*)"$/) do |className0, className1|
    container = @driver.find_element(:class, className0)
    element = container.find_element(:class, className1).click()
    sleep 2
  end

  Then(/^I click on element that links to "(.*?)"$/) do |link|
    @driver.find_element(:xpath, '//a[@href="' + link + '"]').click
    sleep 2
  end

  Then(/^I should see the text "(.*?)"$/) do |text|
    @driver.find_element(:class=>"gh-main").text.include? text
  end

end