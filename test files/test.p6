grammar url {
  has $ascii = 0; 
  has $any = 0;

  regex TOP { [.*? <fullurl> .*?]+ } 
  token anyProtocol { <[a..z A..Z]>}

  method get_regex {
    my $thing = regex {<fullurl>}
    $thing;
  }
}

class url-actions {
  method TOP;
}
