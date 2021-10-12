contains(val) {
    if(this.root==null) return false;
    
    var runner = this.root;
    while(runner != null) {
      if(runner.value==val) return true;
      if(val > runner.value) runner = runner.right;
      else runner = runner.left;
    }
    
    return false;
}

  size() {
    if(this.root==null) return 0;
    
    var size=0;
    var runner = this.root;
    var leftRunner = this.root.left;
    while(runner != null || leftRunner !=null) {
      if(leftRunner != null) {
        size++;
        leftRunner = leftRunner.left;
      }
      size++;
      runner = runner.right;
    }
    
    return size;
}