var assert = require('assert');

describe('TodoListPage', function() {
  it('should have the right title', function() {
    browser.url('http://localhost:8080').then(function() {
      var title = browser.getTitle();
      assert.equal(title, 'React-Redux Template');

      var ul = browser.findElement(By.cssSelector('ul'));
      assert.equal(ul.length, 1);
    });
  });
});
