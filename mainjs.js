document.addEventListener('DOMContentLoaded', ready);
    var user = {login:"Leha", avatar:"http://avataras.net.ru/games/g162.jpg"};
    console.log(user.avatar);
    user = JSON.stringify(user);
    console.log(user);
    localStorage.setItem('bot',user);
    var userReturn = localStorage.getItem('bot');
    userReturn=JSON.parse(userReturn);
    console.log(userReturn.avatar);
    
    function ready () {
	  console.log('ready');
	  document.getElementById('imgAvatar').style.background= 'url("'+userReturn.avatar+'")';
	  console.log('url("'+userReturn.avatar+'")');
	  console.log(userReturn.login)
	  document.getElementById('strLogin').innerHTML = userReturn.login;
	   
	  var sidebarMenuButton = document.getElementById('jsSidebarMenuButton');	
	  var appContainer = document.getElementById('jsAppContainer');
	  sidebarMenuButton.onclick = handleSidebarMenuButtonClick;

	  function handleSidebarMenuButtonClick(event) {
	    var button = event.target;
        console.log(button.classList);
        console.log(event.type + "на" + event.currentTarget);
        button.classList.toggle('opened-menu');
        button.classList.toggle('closed-menu');

        appContainer.classList.toggle('opened-sidebar');
        appContainer.classList.toggle('closed-sidebar');
    }
      var avatarLoginButton = document.getElementById('jsDivLoginAvatar');
      var menuLoginAvatar = document.getElementById('jsMenuLoginAvatar');
	  avatarLoginButton.onclick = handleAvatarLoginClick;
     
      function handleAvatarLoginClick(event) {
        var buttonAva = event.target;
        console.log(buttonAva.classList);
        buttonAva.classList.toggle('opened');
        buttonAva.classList.toggle('closed');
        
        menuLoginAvatar.classList.toggle('sidebarLoginAvatarOpened');
        menuLoginAvatar.classList.toggle('sidebarLoginAvatarClosed');
        


	 

     }

}
	
