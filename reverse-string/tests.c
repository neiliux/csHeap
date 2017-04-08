#include <stdio.h>
#include <setjmp.h>
#include "cmocka/cmocka.h"
#include "reverse-string.h"

static void strlen_should_return_expected_length()
{
    const char *string = "hello";

    int length = strlen_custom(&string[0]);

    assert_int_equal(5, length);
}

static void strlen_should_return_0_when_given_null_pointer()
{
    int length = strlen_custom(NULL);
    assert_int_equal(0, length);
}

static void reverse_should_reverse_string()
{
    //const char *string = "hello";
    //const char *reversedString = "olleh";
    char string[6] = {'h', 'e', 'l', 'l', 'o', '\0'};
    char reversedString[6] = {'o', 'l', 'l', 'e', 'h', '\0'};

    reverse(&string[0]);
    assert_string_equal(&string[0], &reversedString[0]);
}

int main()
{
    const struct CMUnitTest tests[] =
    {
        cmocka_unit_test(strlen_should_return_expected_length),
        cmocka_unit_test(strlen_should_return_0_when_given_null_pointer),
        cmocka_unit_test(reverse_should_reverse_string)
    };

    return cmocka_run_group_tests(tests, NULL, NULL);
}
