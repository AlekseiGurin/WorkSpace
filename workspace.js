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
            var sidebarMenuButton = document.getElementById('jsSidebarMenuButton'); 
            var appContainer = document.getElementById('jsAppContainer');
	        var button = event.target;
            console.log(button.classList);
            console.log(event.type + "на" + event.currentTarget);
            button.classList.toggle('opened-menu');
            button.classList.toggle('closed-menu');

            appContainer.classList.toggle('opened-sidebar');
            appContainer.classList.toggle('closed-sidebar');
        };
        
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
       
            var exitLog = document.getElementById('logOut');
            exitLog.onclick = handleLogaut;
            function handleLogaut(){
                console.log('LOGOUT');
            };
        };

        var numberColumn = 1;
        document.getElementById('addColumn').onclick = function () {
            var elemContent = document.getElementById('jsContent');
            var divColumn = document.createElement('div');
            divColumn.className = 'column';
            divColumn.id = 'jsColumn'+ numberColumn;
            var column = divColumn.id;
            elemContent.appendChild(divColumn);
            divColumn.innerHTML = '<strong>Column №</strong>' + numberColumn;
            var elemColumn = document. getElementById('jsColumn' + numberColumn);
            var columnButton = document.createElement('button');
            columnButton.className = 'buttonAddRow';
            columnButton.id = 'jsButtonAddRow' + numberColumn;
            elemColumn.appendChild(columnButton);
            columnButton.innerHTML = '<strong>add row</strong>';
            var numberRowInColumn = 1;

            document.getElementById(columnButton.id).onclick = function () {
                console.log(numberRowInColumn);
                var elemRow = document.createElement('p');
                elemRow.className = 'elemRowStyle';
                elemRow.id = columnButton.id + numberRowInColumn;
                elemColumn.appendChild(elemRow);
                elemRow.innerHTML = 'row' + numberRowInColumn + '<br>Dependecies</br>';
                
                document.getElementById(columnButton.id + numberRowInColumn).onclick = function () {
                    var row = event.target;
                    var rowInColumn = row.parentNode.getElementsByTagName('p');
                    for (i = 0; i < rowInColumn.length; i++) {
                        if (rowInColumn[i].id === row.id ) {
                            row.classList.toggle('selectRow');
                            row.classList.toggle('elemRowStyle');
                        } else {
                            rowInColumn[i].classList = 'elemRowStyle';
                        };
                    };  
                };
                numberRowInColumn++; 
            };
            numberColumn++;
        };
    };