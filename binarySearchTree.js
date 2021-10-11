class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

}

add(value) {
    var new_node = new BSTNode(value);
    if(this.root == null){
        this.root = new_node;
        return this;
    }
    let runner = this.root;
    while(runner){
        if(runner.value > new_node.value){
            if(runner.left == null) {
                runner.left = new_node;
                return this;
            }
            runner = runner.left;
        } 
        else if(runner.value < new_node.value) {
            if(runner.right == null){
                runner.right = new_node;
                return this;
            }
            runner = runner.right;
        }
        console.log(runner)
    }
}

findMin() {
    if(this.root == null){
        return null;
    }
    let runner = this.root;
    while(runner){
        if(runner.left == null){
            return runner.value;
        }
        runner = runner.left;
    }
}

findMax() {
    if(this.root == null){
        return null;
    }
    let runner = this.root;
    while(runner){
        if(runner.right == null){
            return runner.value;
        }
        runner = runner.right;
    }
}