Feature: Purchasing a laptop
    Scenario: User gets into the computer page
        Given I am on the computer page
        When I select the category "notebooks"
        When I select "asus-laptop" - laptop I want
        When I add computer to cart
        Then I get product added successfully