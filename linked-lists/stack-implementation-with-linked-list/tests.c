#include <stdio.h>
#include <setjmp.h>
#include "cmocka/cmocka.h"

static void a_test(void **state)
{
    int sum = 3 + 6;
    assert_int_equal(9, sum);
}

int main()
{
    const struct CMUnitTest tests[] =
    {
        cmocka_unit_test(a_test)
    };

    return cmocka_run_group_tests(tests, NULL, NULL);
}
