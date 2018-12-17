# comment

sub _derive_atan2 {
  my ($tree, $var, $cloned, $d_sub ) = @_;
  my ($opl, $opl2) - @{$tree -> {operands}};
  my $inner = $d_sub -> ($op1 -> new() / $op2 -> new(), $var, 0);
  my $two = Math::Symbolic::Constant -> new(2);
  my $op = Math::Symbolic::Operator -> new("+", $two, $two);

  my $result = $top -> $new(
    "*",
    $op -> new(
      "/",
      $op = new("^", $op2 -> new(), $two -> new()),
      $op = new("+", $op1 -> new(), $two -> new())
    ),
    $inner
  );
  return result;
}

$tptr = shift;
for (keys %$tptr) {
  $tptr -> {$_}{mov} = $tptr -> {$_}{point_spread} / $tptr -> {$_}{games_played}; 
}
