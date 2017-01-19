// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-dendrogram', function() {
    test('Check initial value of root node', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram'),
        rootNodeEle = Polymer.dom(dendrogram.root).querySelector('.node-text title');
      assert.equal(rootNodeEle.textContent, 'Home (10)');
      done();
    });

    test('Check initial value of items per level', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram'),
        itemsPerLevel = dendrogram.itemsPerLevel;
      assert.equal(itemsPerLevel, '10');
      done();
    });

    test('Check children is loaded when clicking on node', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram'),
        rootNodeEle = Polymer.dom(dendrogram.root).querySelector('g.node g');
      rootNodeEle.addEventListener('click', function() {
        setTimeout(function(){
          assert.equal(Polymer.dom(dendrogram.root).querySelectorAll('g.node').length, '11');
          done();
        }, 1000);
      });
      rootNodeEle.dispatchEvent(new Event('click'));
    });

    test('Check pager existed', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram');
      assert.isNotNull(Polymer.dom(dendrogram.root).querySelector('g.pager'));
      done();
    });

    test('Check links between nodes existed', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram');
      assert.equal(Polymer.dom(dendrogram.root).querySelectorAll('g > path').length, '10');
      done();
    });

    test('Check parent node has class node-visited', function(done){
      var dendrogram = Polymer.dom(document).querySelector('px-dendrogram');
      assert.isTrue(Polymer.dom(dendrogram.root).querySelector('g.node').classList.contains('node-visited'));
      done();
    });

  });
}
