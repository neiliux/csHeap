CC=clang
CFLAGS=-c
LDFLAGS=-Lcmocka -lcmocka
SOURCES=tests.c reverse-string.c
OBJECTS=$(SOURCES:.c=.o)
EXECUTABLE=tests

all: $(SOURCES) $(EXECUTABLE)

$(EXECUTABLE): $(OBJECTS)
	$(CC) $(LDFLAGS) $(OBJECTS) -o $@

.c.o:
	$(CC) $(CFLAGS) $< -o $@

