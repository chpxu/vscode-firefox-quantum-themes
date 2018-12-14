//Comment

#include <stdio.h>
#include <conio.h>

int main(int argc, char *argc) {
  int x;
  clrscr();
  printf("%d\n", argc);
  for (x = 0; x < argc; x++) {
    printf("%s\n", argv[x]);
  }
  getch();

  int ifVar = 10;
  if (ifVar >= 5) { printf("%i", ifVar); }

  return 0;
}





