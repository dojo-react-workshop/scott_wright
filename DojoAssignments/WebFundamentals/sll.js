function sll(){
	this.head=null
	this.addBack=function(val){
		//var tempNode = new node(val)
		if (!this.head){
			this.head=new node(val)
		}else{
			var current=this.head
			while (current.next){
				current=current.next
			}
			current.next=new node(val)
		}
	}
}
function node(value){
	this.value=value 
	this.next=null
}

sll.prototype.findMax = function(){
	var cur = this.head
	var max = cur.value
	while (cur){
		if (cur.value > max){
			max = cur.value
		}
		cur = cur.next
	}
	return max
}

sll.prototype.myName=`scott`




mySll=new sll()
for (var i = 1; i<10; i++){
	mySll.addBack(i)
}

mySll2=new sll()
for (var i = 11; i<20; i++){
	mySll2.addBack(i)
}

//make a linked list with values 1-9
var current=mySll.head
while (current){
	console.log(current.value)
	current=current.next
}

//return value of max
console.log(`max=${mySll.findMax()}`)

console.log(mySll.myName)
mySll.myName=`Alana`
console.log(mySll.myName)
console.log(mySll2.myName)
sll.prototype.myName=`Elliott`
console.log(mySll.myName)
console.log(mySll2.myName)


//console.log(current.value)