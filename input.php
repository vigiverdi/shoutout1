<?php



$channelcount = 28; // Change this value to customize the no'of iframes

$storefile = "data/channels.json";

$data = array();

$id = $_GET['id']; 

$demo = array("UCP2nLvJHNJ8Qio65Hjx3T4Q"); //Default Channel ID

$template = json_encode($demo, JSON_PRETTY_PRINT);



if (!$id == null) {

  try

  {

     $jsondata = file_get_contents($storefile);

     

     $data = json_decode($jsondata, true);



    if ($data == null) {

      file_put_contents($storefile, $template);

      $jsondata = file_get_contents($storefile);

      $data = json_decode($jsondata, true);

    } 



	   function searchForId($data, $id) {

          foreach ($data as $value) {

              if ($value == $id) {

               return true;

              }

          }

       return false;

      }



	$isDuplicate= searchForId($data, $id);

	

	if ($isDuplicate == false){

          if (count($data) > $channelcount-1) {

           array_shift($data);

          }

		   array_push($data,$id);

        $jsondata = json_encode($data, JSON_PRETTY_PRINT);

	if (file_put_contents($storefile, $jsondata)) {

        echo 'Channel Anda Berhasil Masuk Dalam Antrian! Tunggu Beberapa saat!';

    }

		

    } 

    else if ($isDuplicate == true) {	

		echo "Channel Anda Berhasil Ditambahkan - Tunggu sebentar hingga muncul dilayar!";

	}



   }

   catch (Exception $e) {

            echo 'Caught exception: ',  $e->getMessage(), "\n";

   }

  }