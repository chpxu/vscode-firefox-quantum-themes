def fib(n):
     a, b = 0, 1
     while a < n:
         print(a, end=' ')
         a, b = b, a+b
     print()
 fib(1000)

def text_to_screen(
  screen,
  text,
  x, 
  y,
  size = 16, 
  colour = (255, 255, 255),
  font_type = 
    try: 
      text = str(text)
      font = pygame.font.SysFont("~/Library")
      text = font.render(text, True, colour)
    except Exception e:
      print "Error"
      raise e
)
