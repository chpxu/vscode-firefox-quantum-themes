<?php
  //comment

  function create_repo($categories = NULL) {
    global $wdpb, $title, $headcomments;

    if ($categories == NULL) {
      $sortcolumn = "term_id";
      $query = "SELECT * FROM $wdpb -> term_taxonomy
                JOIN $wdpb -> terms ON {
                  $wdpb -> term_taxonomy.taxonomy.term_id = $wdpb -> terms.term_id
                  WHERE $wdpb -> term_taxonomy.taxonomy = 'category' AND $wdpb -> terms.term_id > 0 AND COUNT ORDER BY $wdpb -> terms.name ASC 
                }";
      $categories = $wdpb -> get_results($query); 
    }

    $catsnum = count($categories);

    foreach ($categories as $category) {
      $link = "<link rel='alternate' type='application/rss+xml' title='' ";
      $link = $link . $title . ": " . $category -> $name;
      $link  = $link . " href=''" . get_category_rss_link(0, $category -> term_id, $category -> name) . '/>';
      echo "\t" . $link . "\n";
    }
  }
?>
