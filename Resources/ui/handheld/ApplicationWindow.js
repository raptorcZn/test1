function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	var label1 = Ti.UI.createLabel({
		text: 'A simple label'
	})
	self.add(label1);
	
	
	var win3 = Titanium.UI.createWindow({
	    title:'Tab 1',
	    backgroundColor:'#ffe',
	    url:'ui/handheld/win1.js'
	});
	self.add(win3);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	return self;
};

module.exports = ApplicationWindow;
