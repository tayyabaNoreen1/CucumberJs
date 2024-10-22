Feature: Google search

  Scenario: Search from the search bar produces correct links
    Given a web browser is at google home page
    When the user enters <keyword> into the search bar
    Then links related to "cucumber" are shown on the results page

    Examples:
      | keyword  |
      | cucumber |
