  
   var flag=0;
   function onInitialize(response) {
                if (response === 'success') {
                    $applozic.fn.applozic('loadContacts', {"contacts":contactsJSON});
		  $applozic.fn.applozic('loadTab', user1);
		  $applozic.fn.applozic('loadTab', user2);
		  $applozic.fn.applozic('loadTab', user3);
                } else if (typeof response === 'object' && response.status === 'error') {
    				alert(response.errorMessage);
    			}
            }

	var otheruser;
  
  window.addEventListener("load",loadConvos());

function loadConvos()
{
	for (i in contacts)
	{
		var nm = contacts[i].displayName;
		var row = '<div class="row itemconvo" id="' + i + '" onClick="loadChat(this)"><div class="col colitemconvo"><p id="username">' + nm + '</p></div></div>';
		document.getElementById("convolist").innerHTML += row;
	}
}
var prevchat = document.getElementById("defaultchattab");
function loadChat(element)
{
	prevcon = document.getElementsByClassName("row itemconvoactive");
	prevcon.className = "row itemconvo";
	element.className="row itemconvoactive";
	var userid = element.id;
	userid = JSON.stringify[userid];
	
	var nm = contacts[userid].displayName;
	var imgsrc = contacts[userid].imageLink;
	document.getElementById("chatheadusername").innerHTML = nm;
	document.getElementById("chatheadimg").src = imgsrc;
	prevchat.outerHTML = "";
	delete prevchat;
	var messgs =  $applozic.fn.applozic('messageList', {'id': 'userid',     
                                        'isGroup': false,               // True in case of group 
                                        'clientGroupId' : 'CLIENT_GROUP_ID', // use either groupId or clientGroupId
                                        'callback': function(response){ 
                                        // write your logic
                                        } 
                                        });
	
	
	var chattab = document.getElementById("colchatcontents");
	chattab.innerHTML = "<div id=\"colchat\"class=\"container chatmessagecontainer\"></div>";
	chattab = document.getElementById("colchat");
	flag = 1;
	var chatmsg;
	for(i in messgs.messages)
	{
		if(messgs.messages[i].type == "inbox")
		{
			chatmsg = "<div class=\"row chatmessagerec\"><div class=\"col chatmessagecol\">" + messgs.messages[i].message + "</div></div>";
		}
		else
		{
			chatmsg = "<div class=\"row chatmessagesend\"><div class=\"col chatmessagecol\">" + messgs.messages[i].message + "</div></div>";
		}
		chattab.innerHTML += chatmsg;
	}
	prevchat = chattab;
	otheruser = username;
}

function sendMessage()
{
	inp = document.getElementById("inputtext").value;
	if(value != "" && flag==1)
	{
		
		$applozic.fn.applozic('sendMessage', {
                                      'to': otheruser,            // userId of the receiver
                                      'message' : inp,       // message to send    
                                      'type' : 0                     //(optional) DEFAULT(0), TEXT_HTML(3)
                                    });

		var msg = "<div class=\"row chatmessagesend\"><div class=\"col chatmessagecol\">" + inp + "</div></div>";
		document.getElementById("colchat").innerHTML += msg;
		
	}
}