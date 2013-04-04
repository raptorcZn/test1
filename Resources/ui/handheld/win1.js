var win3 = Ti.UI.currentWindow;

var label1 = Titanium.UI.createLabel({
    color:'#999',
    text:'I am Window 1',
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    textAlign:'center',
    width:'auto'
});

var open_window = Titanium.UI.createButton({
    title:'Open a new window',
    top:270,
    left:30,
    right:30,
    height:30
});


win3.add(open_window); 
win3.add(label1);