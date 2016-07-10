/**
 * Joshua Yuan
 * June 2016
 */

// Invoked when the 'Play!' button is clicked.
// Hides the form element and shows that file is uploading.
function startUpload() {
	document.getElementById('form').style.visibility = 'hidden';
	document.getElementById('result').style.visibility = 'hidden';
    document.getElementById('processing').style.visibility = 'visible';
    return true;
}

// Invoked after upload.php script.
// Displays whether or not upload was successful.
function stopUpload(success, name) {
	var result = '';
	if (success){       // if file upload successful
	     document.getElementById('result').innerHTML =
	       '<span class="msg">File uploaded!<\/span><br/>';

	    // switch audio source to uploaded file
	    var audio = document.getElementById('player');
		audio.setAttribute('src', 'upload/' + name);
		audio.play();
	} else {  			// if file upload failed
	     document.getElementById('result').innerHTML =
	       '<span class="emsg">Error! Max Size: 5 MB<\/span><br/>';
	}

	document.getElementById('form').style.visibility = 'visible';
	document.getElementById('result').style.visibility = 'visible';
	document.getElementById('processing').style.visibility = 'hidden';

    return true;
}