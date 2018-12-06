makefile:
all: hello

clean:
	-rm main.o hello.exe hello

main: main.o Class1.o

target: dependencies
