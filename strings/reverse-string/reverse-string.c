#include <stdio.h>
#include "reverse-string.h"

void reverse(char *string)
{
    // Time complexity: O(N + N/2)
    // TODO: Investigate time complexity, not sure if it is correct.
    
    int length = strlen_custom(string);
    char temp;
    char *end = &string[length-1];

    while (end > string)
    {
        temp = *string;
        *string = *end;
        *end = temp;

        string++;
        end--;

        // could be optmized to
        // *string++ = *end;
        // *end-- = temp;
    }
}

int strlen_custom(const char *string)
{
    if (string == NULL)
    {
        return 0;
    }

    int length = 0;
    while (string[++length])
    {
    }
    return length;
}
