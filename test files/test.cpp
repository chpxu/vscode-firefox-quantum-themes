//Comment

#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;

int main() {
  int max, randomNumber;
  cout << "Please input a number";
  cin >> max;

  srand(time(0));
  random_number = (rand () % max) + 1;
}





