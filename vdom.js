// Virtual DOM


function vdom(){
    function Node(tagname){
        this.tagname = tagname;
        this.children = [];
        this.parentNode = null;
    }

    vdom.prototype.createNewElement = function (tagname) {
        return new Node(tagname);
    }

    Node.prototype.appendChild = function (childName){
        childName.parentNode = this;
        this.children.push(childName);
    }
}