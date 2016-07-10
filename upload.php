<?php
/**
 * Joshua Yuan
 * June 2016
 * Uploads the file to server. MD5 algorithm used to generate file names.
 * Real file names not used to avoid repetition and special characters.
 */
$destination_path = '/var/www/html/audio-visualizer/upload/';

$basename = basename($_FILES['myfile']['name']);       // ex: kpop.mp3
$randName = md5(rand() * time());                      // ex: f13b430ebbc360c1763cd278c2d3477c
$dotLoc = strripos($basename, ".");					   // ex: .mp3

// ex: f13b430ebbc360c1763cd278c2d3477c.mp3
$basename = $randName . substr($basename, $dotLoc);
// ex: /var/www/html/audio-visualizer/upload/f13b430ebbc360c1763cd278c2d3477c.mp3
$target_path = $destination_path . $basename;

$result = 0;
if (@move_uploaded_file($_FILES['myfile']['tmp_name'], $target_path)) {
  	$result = 1;
}

sleep(1);

?>

<script language="javascript" type="text/javascript">
   	window.top.window.stopUpload(<?php echo $result; ?>, '<?php echo $basename; ?>');
</script>
